import styled from 'styled-components'

const ListItem = styled.li`
  margin: 0;
  padding: 0.5rem 2rem;
  position: relative;

  &:nth-child(even) {
      background: #CCC;
  }

  ${(props) => (props.type === 'ol' && 
    `
      counter-increment: li;
      &::before {
        content: counter(li) ". ";
        display: inline-block;
        position: absolute;
        font-size: 16px;
        top: 0.5rem;
        left: 1.5rem;
      }
      @media ${props.theme.deviceBreakpoints.laptop} { 
        padding: 0.5rem 2rem;
      }
    `
    )}
    
`;

export default ListItem;