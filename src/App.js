import React, { useState } from 'react';
// import Accordian from './components/Accordion';
// import Search from './components/Search'
// import Dropdown from './components/Dropdown';
import Translate from './components/Translate'

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
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordian items={items} /> */}
      {/* <Search /> */}
      {/* <button
        className='ui button inverted secondary'
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Toggle Dropdown
      </button> */}
      {/* {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Translate />
    </div>
  );
};
