import React from 'react';
import { Navigate } from 'react-router-dom';

const Me = () => {
  const username = localStorage.getItem('myGithub');

  if (!username) {
    return <Navigate to="/" />;
  }

  return <Navigate to={`/user/${username}`} />;
};

export default Me;