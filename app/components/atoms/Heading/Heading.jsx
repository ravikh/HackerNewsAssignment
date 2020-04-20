import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './Heading.style';

const Heading = ({ type, children, appear, className }) => React.createElement(styled(type)`${styles}`, {type, appear, className}, children)

Heading.defaultProps = {
    type: 'h3',
    appear: '',
    className: ''
};

Heading.propTypes = {
    type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    appear: PropTypes.string,
    className: PropTypes.string
};

export default Heading;