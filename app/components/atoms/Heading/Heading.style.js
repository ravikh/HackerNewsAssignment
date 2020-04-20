
import {css} from 'styled-components';

const styleRules = (props) => {
    let cssRules = props.theme.typography.font_default;
    if (props.type) {
        if (props.appear) {
            cssRules = props.theme.typography[`font_${props.appear}`]
        } else {
            cssRules = props.theme.typography[`font_${props.type}`]
        }
    }
    return cssRules;
}

const HeadingStyles = css`
    ${props => styleRules(props)}
`;

export default HeadingStyles;