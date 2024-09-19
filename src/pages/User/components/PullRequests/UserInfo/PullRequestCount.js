import React from 'react';
import PropTypes from 'prop-types';

const PullRequestCount = ({ pullRequestCount, pullRequestAmount }) => (
  <span className="block rounded white fs-32 text-black">
    {pullRequestCount}/{pullRequestAmount}
  </span>
);

PullRequestCount.propTypes = {
  pullRequestCount: PropTypes.number.isRequired,
  pullRequestAmount: PropTypes.number.isRequired
};

export default PullRequestCount;
