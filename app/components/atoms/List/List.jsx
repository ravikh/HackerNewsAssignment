import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './List.style';

const StyledList = ({children, type, className}) => 
    React.createElement(
        styled(type)`${styles}`, 
        {type, className}, 
        children
    )  

StyledList.defaultProps = {
    type: 'ul',
    className: ''
}

StyledList.propTypes = {
    type: PropTypes.oneOf(['ul', 'ol']),
    className: PropTypes.string
}

export default StyledList;