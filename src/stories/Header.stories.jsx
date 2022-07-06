import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../components/header';
import "../index.css"

const stories = storiesOf('Header', module);

stories.add('Default State', () => {
  return (
    <Header className="bg-purple-300 text-yellow-500">
      This is the default state of the Header component.
    </Header>
  );
});

stories.add('Alternate State', () => {
  return (
    <Header>
      This is an alternate state of the Header component.
    </Header>
  );
});