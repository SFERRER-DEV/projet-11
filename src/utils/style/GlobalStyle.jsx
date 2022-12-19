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
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
    }

    header {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1240px;
      padding: 1.5em 0;
      margin: 0 auto;
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
