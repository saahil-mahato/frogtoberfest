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
    style={{
      outline: 'none', background: '#15171226', border: '1px solid #15171233'
    }}
    className="bn br--left leading-tight rounded-l flex-auto border-2"
  />
);

UsernameInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default UsernameInput;
