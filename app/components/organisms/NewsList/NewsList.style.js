
import {css} from 'styled-components';

const NewsListStyles = css`
    padding-top: 3rem;
    
    .news-item-row {
        max-width: 100%;

        ${(props) => `
            @media ${props.theme.deviceBreakpoints.laptop} { 
                max-width: ${props.theme.size.laptop};
                font-size: 14px;
            }
        `};
    }
    
`;

export default NewsListStyles;