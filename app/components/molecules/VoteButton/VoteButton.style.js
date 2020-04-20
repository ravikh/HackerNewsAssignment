
import {css} from 'styled-components';

const arrowHeight = 8;
const upArrowBorderWidth = `0px ${arrowHeight/2}px ${arrowHeight}px ${arrowHeight/2}px`;
const downArrowBorderWidth = `${arrowHeight}px ${arrowHeight/2}px 0px ${arrowHeight/2}px`;

const VoteButtonStyles = css`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${upArrowBorderWidth};
    line-height: 10px;
    margin-left: 10px;
    border-color: ${(props) => props.isVoted ? 
      `transparent transparent ${props.theme.colors.primary.light} transparent` : 
      `transparent transparent ${props.theme.colors.primary.dark} transparent`
    }
`;

export default VoteButtonStyles;