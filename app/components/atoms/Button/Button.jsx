import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './Button.style';

const Button = ({ children, showAsLink, disabled, isPrimary, isSecondary, ariaLabel, className, type, hideText, onClick }) => {
    return (
        <button
            aria-label={ariaLabel}
            type={type}
            className={className}
            disabled={disabled}
            onClick={onClick}
            >
            {children}
        </button>
    )
}

Button.defaultProps = {
    className: '',
    ariaLabel: '',
    showAsLink: false,
    disabled: false,
    isPrimary: true,
    isSecondary: false,
    hideText: false,
    onClick: () => {}
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    showAsLink: PropTypes.bool,
    disabled: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isSecondary: PropTypes.bool,
    hideText: PropTypes.bool,
    onClick: PropTypes.func
};

const StyledButton = styled(Button)`
  ${styles};
`;

export default StyledButton;