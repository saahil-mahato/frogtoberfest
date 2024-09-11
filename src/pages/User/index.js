import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import SiteTitle from 'components/SiteTitle';
import UsernameForm from 'components/UsernameForm';
import PullRequests from './components/PullRequests';
import SiteHeader from 'components/SiteHeader';

/**
 * User Component.
 */
const User = () => {
  const { username } = useParams(); // Get the username from the URL
  const [totalPrCount, setTotalPrCount] = useState(0);
  const [totalOtherPrCount, setTotalOtherPrCount] = useState(0);

  const setUserContributionCount = (newTotalPrCount, newTotalOtherPrCount) => {
    if ((newTotalPrCount || newTotalPrCount === 0) && (newTotalOtherPrCount || newTotalOtherPrCount === 0)) {
      setTotalPrCount(newTotalPrCount);
      setTotalOtherPrCount(newTotalOtherPrCount);
    }
  };

  return (
    <Fragment>
      <SiteHeader />
      <div className='banner banner--img-fixed'>
        <SiteTitle>Frogtoberfest</SiteTitle>
        <UsernameForm
          username={username}
          totalPrCount={totalPrCount}
          totalOtherPrCount={totalOtherPrCount}
        />
        <PullRequests username={username} setUserContributionCount={setUserContributionCount} />
      </div>
    </Fragment>
  );
};

User.propTypes = {
  // No need for propTypes since we're using hooks and not receiving props
};

export default User;