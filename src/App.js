import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

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
  return (
    <div>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
