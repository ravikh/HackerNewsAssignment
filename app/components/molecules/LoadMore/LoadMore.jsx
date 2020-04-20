import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import styles from './LoadMore.style';

const LoadMoreButton = ({
    onClick, children, className
}) => {
    return (
        <Button
            title='Load More'
            onClick={onClick}
            className={className}
        >{children}</Button>
    )
}

LoadMoreButton.defaultProps = {
    onClick: () => {}
}

LoadMoreButton.propTypes = {
    onClick: PropTypes.func
}

const StyledLoadMoreButtonButton = styled(LoadMoreButton)`
  ${styles};
`;

export default StyledLoadMoreButtonButton;