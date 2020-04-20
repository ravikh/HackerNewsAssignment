
import {css} from 'styled-components';

const ButtonStyles = css`
    border: none;
    border-radius: 0;
    position: relative;
    min-height: 2rem;
    color: ${props => props.theme.colors.primary.dark};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    ${(props) => props.showAsLink ? `
        background: none;
        min-height: 1rem;
        color: ${props.theme.colors.common.blue};
      `
        : ``};

    ${(props) => (props.hideText && 
        `
            text-indent: -999rem;
        `)}
`;

export default ButtonStyles;