import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import UsernameInput from './UsernameInput';
import CheckButton from './CheckButton';

/**
 * Username form component.
 */
const UsernameForm = ({ username, totalPrCount, totalOtherPrCount }) => {
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState(username);

  useEffect(() => {
    setInputUsername(username);
  }, [username]);

  /**
   * Event handler for username change.
   *
   * @param {*} e
   */
  const handleUsernameChange = e => {
    setInputUsername(e.target.value);
  };

  /**
   * Event handler for form submission.
   *
   * @param {*} e
   */
  const handleSubmit = e => {
    e.preventDefault();
    const trimmedUsername = inputUsername.trim();

    if (trimmedUsername.length === 0) {
      return;
    }
    const userUrl = getUserUrl(trimmedUsername);
    navigate(userUrl);
  };

  /**
   * Get URL for the user by username.
   *
   * @param {string} username
   */
  const getUserUrl = username => {
    return `/user/${username}`;
  };

  return (
    <div className="pb-8 pt-4 sm:pt-10">
      <form
        className="flex mx-auto w-3/4 sm:w-1/2"
        style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}
        onSubmit={handleSubmit}
      >
        <UsernameInput value={inputUsername} onChange={handleUsernameChange} />
        <CheckButton />
      </form>
    </div>
  );
};

UsernameForm.propTypes = {
  username: PropTypes.string,
  totalPrCount: PropTypes.number,
  totalOtherPrCount: PropTypes.number,
};

UsernameForm.defaultProps = {
  username: '',
  totalPrCount: 0,
  totalOtherPrCount: 0,
};

export default UsernameForm;