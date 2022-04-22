import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --pokemon-primary: #25114D;
    --pokemon-secondary: #5731AE ;
    --pokemon-terciary: #FF61F3;


    --gray-400: #9E9E9E;
    --gray-500: #717171;
    --white-100: #ffffff;

    --notification-error: #FC6258;
    --notification-warning: #FEBE07;
    --notification-success: #16CC39;

    --header-height: 7.5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Poppins", sans-serif;
  }

  ul {list-style-type: none}
  a {text-decoration: none}
  button {cursor: pointer; background: transparent; border: 0}
`;
