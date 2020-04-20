import React from 'react';
import styled from 'styled-components';
import styles from './Header.style';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import Link from '../../atoms/Link';
import {PAGE_TITLE} from '../../../constants';
import scrollTop from '../../../utils/domUtil';

const Header = ({className}) => {

    return (
        <header className={className}>
            <Heading type="h1" appear="h3" className="page-heading">
                <Link className="logo" title={PAGE_TITLE}>Y</Link>
            </Heading>
            <Button  onClick={scrollTop} showAsLink>Top</Button>
            <Button showAsLink>New</Button>
        </header>
    );
}

const StyledHeader = styled(Header)`
  ${styles};
`;

export default StyledHeader;