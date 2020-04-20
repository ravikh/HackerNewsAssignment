import modernNormalize from "styled-modern-normalize";

import { createGlobalStyle } from "styled-components";

const ModernNormalize = createGlobalStyle`
  ${modernNormalize}
  ul {
    margin: 0;
    padding: 0;
  }
`;

export default ModernNormalize;