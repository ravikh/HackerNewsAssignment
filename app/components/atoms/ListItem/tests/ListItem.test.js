import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import ListItem from '../ListItem';

import Theme from '../../../../theme';

describe('ListItem', () => {
  let listItem = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    listItem = shallow(<ListItem theme={theme}>list item</ListItem>);
    expect(listItem).toMatchSnapshot();
  });
});