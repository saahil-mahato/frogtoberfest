import React from 'react';

const CheckButton = () => (
  <button
    type="submit"
    style={{
      outline: 'none'
      /* Tailwind's outline-none class doesn't remove default outlines */
    }}
    className="btn btn-check"
  >
    Check
  </button>
);

export default CheckButton;
