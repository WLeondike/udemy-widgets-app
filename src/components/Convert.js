import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Google Translate API Key will only work on localhost:3000
const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      'https://translation.googleapis.com/language/translate/v2',
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: KEY,
        },
      }
    );
  }, [language, text]);
  return <div />;
};

export default Convert;
