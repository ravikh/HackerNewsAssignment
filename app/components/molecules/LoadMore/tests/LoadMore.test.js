import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import LoadMoreButton from '../LoadMore';

import Theme from '../../../../theme';

describe('LoadMoreButton', () => {
  let button = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    button = shallow(<LoadMoreButton theme={theme} />);
    expect(button).toMatchSnapshot();
  });
});