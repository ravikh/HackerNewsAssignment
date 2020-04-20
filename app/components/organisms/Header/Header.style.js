
import {css} from 'styled-components';

const HeaderStyles = css`
    ${(props) => `
        background-color: ${props.theme.colors.background.header};
        color: ${props.theme.colors.common.white};
        height: 2.5rem;
        margin-bottom: 1rem;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
        
        h1 {
            margin: 0;
            line-height: 2.5rem;
            padding-left: 1rem;
            display: inline;
            margin-right: 2rem;
        }

        .logo {
            color: ${props.theme.colors.common.white};
            border: 1px solid ${props.theme.colors.common.white};
            padding: 0.3rem 0.5rem;
            text-decoration: none;
            font-size: 12px;
        }

        button {
            color: ${props.theme.colors.common.white};
            font-size: 14px;
            border-right: 1px solid ${props.theme.colors.common.black};
            &:last-child {
                border: none;
            }
            &:focus, &:hover, &.active {
                color: ${props.theme.colors.common.black};
            }
        }
    `};
`;

export default HeaderStyles;