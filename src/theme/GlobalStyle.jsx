import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Theme } from "styles/theme";

const GlobalStyle =
  createGlobalStyle <
  ThemeInterface >
  `
${reset}
  html,
  body {
    color: ${({ theme }) => theme.ftColor};
    background-color: ${({ theme }) => theme.bgColor};
	...
  }
`;

export default GlobalStyle;
