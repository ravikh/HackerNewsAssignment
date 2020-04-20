import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Heading from '../Heading';

import Theme from '../../../../theme';

describe('Heading', () => {
  let heading = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    heading = shallow(<Heading theme={theme} type="h1"/>);
    expect(heading).toMatchSnapshot();
  });
});