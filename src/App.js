import React, { useState } from 'react';
// import Accordian from './components/Accordion';
// import Search from './components/Search'
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JavaScript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JavaScript library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: `I'm Red!`,
    value: 'red',
  },
  {
    label: `I'm Green!`,
    value: 'green',
  },
  {
    label: `I'm Blue!`,
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordian items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
