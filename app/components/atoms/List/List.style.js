
import {css} from 'styled-components';

const ListStyles = css`
    margin: 0;
    padding: 0;
    list-style: none;

    ${props => {
        return props.type === 'ol' ? 'counter-reset: li;' : ''
    }}
    
`;

export default ListStyles;