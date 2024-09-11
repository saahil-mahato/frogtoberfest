import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShareButtons from './ShareButtons';
import LoadingIcon from './LoadingIcon';
import PullRequest from './PullRequest';
import ErrorText from './ErrorText';
import UserInfo from './UserInfo';
import { fetchInfoFromGitHub, getApiUrls } from 'services/index';
import { GITHUB_TOKEN, LF_CAREER_URL } from 'config';

/**
 * Returns an object containing user info.
 *
 * @param {string} username
 * @returns {*}
 */
export async function fetchUserInfo(username) {
  const apiUrls = getApiUrls(username);

  const results = apiUrls.map(url => fetchInfoFromGitHub(url, GITHUB_TOKEN));
  let [data, userDetail, membershipStatus] = await Promise.all(results);

  [data, userDetail, membershipStatus] = [await data.json(), await userDetail.json(), membershipStatus.ok];

  return { data, userDetail, membershipStatus };
}

/**
 * Pull Requests component.
 */
const PullRequests = ({ setUserContributionCount }) => {
  const { username } = useParams(); // Get the username from the URL
  const [state, setState] = React.useState({
    loading: true,
    data: null,
    error: null,
    userDetail: null,
    otherReposCount: null,
    isOrgMember: true,
  });

  React.useEffect(() => {
    storeUsernameAsMe();
    fetchPullRequests();
  }, []);

  /**
   * Lifecycle event for component update.
   *
   * @param {*} prevProps
   */
  React.useEffect(() => {
    fetchPullRequests();
  }, [username]);

  /**
   * Persist username in the local storage.
   */
  const storeUsernameAsMe = () => {
    if (localStorage.getItem('myGithub')) {
      return;
    }

    localStorage.setItem('myGithub', username);
  };

  /**
   * Fetch pull requests.
   *
   * @returns {Promise}
   */
  const fetchPullRequests = async () => {
    try {
      const userInfo = await fetchUserInfo(username);

      displayPullRequests(userInfo);
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        error,
        loading: false,
        data: null,
        userDetail: null,
        isOrgMember: true,
      }));
    }
  };

  /**
   * Displays general error message.
   *
   * @returns {node}
   */
  const getErrorMessage = () => {
    const { data, error } = state;

    if (error?.description) {
      return <> error.error_description</>;
    }

    if (data?.errors) {
      return <> data.errors.message</>;
    }

    return <> Couldn&apos;t find any data or we hit an error, try again?</>;
  };

  /**
   * Displays Error if User is not a member of organization.
   *
   * @returns {node}
   */
  const getNotAMemberMessage = () => {
    return (
      <>
        You are not a member of Leapfrog Technology. However, you can join our{' '}
        <a href={LF_CAREER_URL} target="_blank" rel="noopener noreferrer">awesome team</a>. 😉
      </>
    );
  };

  /**
   * Count other repositories.
   *
   * @param {*} data
   * @param {*} userDetail
   * @returns {number}
   */
  const countOtherRepos = (data, userDetail) => {
    const user = userDetail.items[0].login;
    let count = 0;

    data.items.forEach(pullRequest => {
      const repoOwner = pullRequest.repository_url
        .split('/repos/')
        .pop()
        .split('/')
        .shift();

      if (repoOwner !== user) {
        count++;
      }
    });

    return count;
  };

  /**
   * Change state to list PRs.
   *
   * @param {*} userInfo
   */
  const displayPullRequests = userInfo => {
    const { data, userDetail } = userInfo;
    const validData = getValidPullRequests(data);
    const otherReposCount = countOtherRepos(validData, userDetail);

    setUserContributionCount(validData.items.length, otherReposCount);

    setState(prevState => ({
      ...prevState,
      data: validData,
      userDetail,
      loading: false,
      otherReposCount,
      error: null,
      isOrgMember: true,
    }));
  };

  /**
   * Validates and returns an object containing valid pull requests.
   *
   * @param {*} data
   * @returns {*}
   */
  const getValidPullRequests = data => {
    const validPullRequests = data.items.filter(pr => {
      const hasInvalidLabel = ({ name }) => name.toLowerCase() === 'invalid';
      const isPullRequestValid = pr.labels.filter(hasInvalidLabel).length === 0;

      return isPullRequestValid;
    });

    return { ...data, total_count: validPullRequests.length, items: validPullRequests }; // eslint-disable-line camelcase
  };

  if (state.loading) {
    return <LoadingIcon />;
  }

  if (!state.isOrgMember) {
    return <ErrorText errorMessage={getNotAMemberMessage()} />;
  }

  if (state.error || state.data?.errors || state.data?.message) {
    return <ErrorText errorMessage={getErrorMessage()} />;
  }

  return (
    <div className='flex justify-center content-center w-full mt-8 lg:flex-row md:flex-col sm:flex-col item-center mx-auto my-0 gitaccount'>
      <div className="text-center text-white gitaccount__profile">
        <UserInfo
          username={username}
          userImage={state.userDetail?.items[0].avatar_url}
          pullRequestCount={state.data?.items.length}
          otherReposCount={state.otherReposCount}
        />
        <ShareButtons username={username} pullRequestCount={state.data?.items.length} />
      </div>
      <div className="rounded  shadow overflow-hidden mb-4 ml-10 lg:ml-10 gitaccount__content">
        {state.data?.items.length > 0 &&
          state.data.items.map((pullRequest, i) => <PullRequest pullRequest={pullRequest} key={pullRequest.title} />)}
      </div>
    </div>
  );
};

PullRequests.propTypes = {
  setUserContributionCount: PropTypes.func.isRequired,
};

export default PullRequests;