import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from 'utils/date';

const PullRequestInfo = ({ pullRequest }) => (
  <div>
    <div className="text-white-darker">
      <a className="text-white font-semibold link no-underline hover:underline" href={pullRequest.user.html_url}>
        {pullRequest.user.login}
      </a>{' '}
      submitted a pull request{' '}
      <a
        className="text-blue-dark link no-underline hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        href={pullRequest.html_url}
      >
        {pullRequest.repository_url.split('repos/')[1]}#{pullRequest.number}
      </a>
    </div>
    <div className="text-white font-light text-sm">
      {pullRequest.title} on {formatDate(pullRequest.created_at)}
    </div>
  </div>
);

PullRequestInfo.propTypes = {
  pullRequest: PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    repository_url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired
    }).isRequired
  })
};

export default PullRequestInfo;
