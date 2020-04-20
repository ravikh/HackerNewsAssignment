
import {css} from 'styled-components';

const NewsListItemStyle = css`
    
    h3 {
        margin: 0 0 5px 0;
        display: inline-block;
        margin-right: 10px;
        font-weight: var(--font-weight-regular);
    }
    button {
        min-height: auto;
        font-size: 14px;
        line-height: 10px;
        padding: 0;
        background-color: unset;

        &:hover {
            font-weight: var(--font-weight-semibold)
        }
    }
    .vote-count {
        display: inline-block;
        width: 2.25rem;
        text-align: right;
    }
    .url, .author, .created-at {
        margin-right: 10px;
        font-size: 12px;
    }
    ${(props) => `
        @media ${props.theme.deviceBreakpoints.laptop} { 
            .comments-count {
                text-align: right;
            }
        }
    `};
    ${(props) => `
        .url, .author, .created-at {
            color: ${props.theme.colors.primary.light}
        }
        .author-name {
            color: ${props.theme.colors.primary.dark}
        }
    `};
`;

export default NewsListItemStyle;