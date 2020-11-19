import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Armenian',
    value: 'hy',
  },
  {
    label: 'Chinese',
    value: 'zh',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'Greek',
    value: 'el',
  },
  {
    label: 'Hebrew',
    value: 'he',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Italian',
    value: 'it',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'Korean',
    value: 'ko',
  },
  {
    label: 'Latin',
    value: 'la',
  },
  {
    label: 'Persian',
    value: 'fa',
  },
  {
    label: 'Polish',
    value: 'pl',
  },
  {
    label: 'Portuguese',
    value: 'pt',
  },
  {
    label: 'Russian',
    value: 'ru',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
  {
    label: 'Thai',
    value: 'th',
  },
  {
    label: 'Vietnamese',
    value: 'vi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label='Select a Language'
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
