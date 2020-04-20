import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import styles from './VoteButton.style';

const VoteButton = ({
    isVoted,
    onVoteClick,
    children,
    className
}) => (
    <Button 
        title={isVoted ? 'Voted' : 'Up Vote'}
        onClick={onVoteClick}
        className={className}
        disabled={isVoted ? true: false}
        hideText
    >{children || 'Vote Icon'}</Button>
)

const StyledVoteButton = styled(VoteButton)`
  ${styles};
`;

VoteButton.defaultProps = {
    isVoted: false,
    onVoteClick: () => {}
}

VoteButton.propTypes = {
    isVoted: PropTypes.bool,
    onVoteClick: PropTypes.func
}

export default StyledVoteButton;