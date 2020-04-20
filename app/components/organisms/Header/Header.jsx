import React from 'react';
import styled from 'styled-components';
import styles from './Header.style';
import Heading from '../../atoms/Heading';
import {PAGE_TITLE} from '../../../constants';

const Header = () => {
    return (
        <header>
            <Heading type="h1" appear="h2" className="page-heading">{PAGE_TITLE}</Heading>
        </header>
    );
}

const StyledHeader = styled(Header)`
  ${styles};
`;

export default StyledHeader;