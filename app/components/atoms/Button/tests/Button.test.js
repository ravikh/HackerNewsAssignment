import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Button from '../Button';

import Theme from '../../../../theme';

describe('Button', () => {
  let button = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    button = shallow(<Button theme={theme} type="button"/>);
    expect(button).toMatchSnapshot();
  });
});