import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ value, onChange }) => (
  <input
    type="text"
    name="username"
    aria-label="GitHub username"
    placeholder="Search GitHub username"
    value={value}
    onChange={onChange}
    spellCheck="false"
    autoCapitalize="none"
    autoCorrect="off"
    autoComplete="off"
    className="bn br--left leading-tight rounded-l flex-auto border-2 pt-2 pr-4 pb-2 pl-4 responsive-checker checker-input"
  />
);

UsernameInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default UsernameInput;
