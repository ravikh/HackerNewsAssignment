
import {css} from 'styled-components';

const LoadMoreButtonStyles = css`
${(props) => `
    color: ${props.theme.colors.background.header};
    margin-left: 2rem;
    @media ${props.theme.deviceBreakpoints.laptop} { 
        margin-left: -2rem;
        &:hover {
            font-weight: 700;
        }
    }
`}
    
`;

export default LoadMoreButtonStyles;