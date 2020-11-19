import React, { useState, useEffect } from 'react';

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log('New Language/text');
  }, [language, text]);
  return <div />;
};

export default Convert;
