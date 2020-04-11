import React from 'react';
import { shallow } from 'enzyme';

import Speakers from '../index';

const speakersData = [
  {
    name: 'test name',
    title: 'test title',
  },
];

describe('Speakers component', () => {
  test('should render correctly', () => {
    const SpeakersComponent = shallow(<Speakers speakersData={speakersData} />);
    expect(SpeakersComponent).toMatchSnapshot();
  });
});
