import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
      font-family: 'Montserrat', sans-serif;
    }

    main {
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-content: space-between;
      margin: 0 5em;
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
