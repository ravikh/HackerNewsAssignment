import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import List from '../List';

import Theme from '../../../../theme';

describe('List', () => {
  let list = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    list = shallow(<List theme={theme}><li></li></List>);
    expect(list).toMatchSnapshot();
  });
});