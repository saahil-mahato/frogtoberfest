import React from 'react';
import getTimeMessage from './getTimeMessage';

const TimeMessage = () => (
  <p className="text-center pb-3" style={timeMessageStyle}>
    {getTimeMessage()}
  </p>
);

const timeMessageStyle = {
  color: '#fff'
};

export default TimeMessage;
