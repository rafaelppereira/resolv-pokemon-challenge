import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --qualivida-green-500: #98C138;
    --qualivida-green-600: #7BA815;
    --qualivida-green-700: #729D10;

    --qualivida-blue-100: #C7ECFF;
    --qualivida-blue-500: #0090D8;
    --qualivida-blue-600: #0076B0;

    --gray-50: #F8F8F8;
    --gray-100: #F5F7FB;
    --gray-200: #D1D1D1;
    --gray-300: #BBBBBB;
    --gray-500: #6A6A6A;

    --white-100: #ffffff;

    --notification-error: #FC6258;
    --notification-warning: #FEBE07;
    --notification-success: #16CC39;
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

  input {
    width: 100%;
    height: 45px;
    padding: 0 1rem;
    border-radius: 0.25rem;

    outline: none;
    border: 1px solid var(--gray-300);
    margin-top: 1rem;

    transition: border-bottom 0.2s ease-out;

    &:focus {
      border-bottom: 2px solid var(--qualivida-green-500);
    }
  }

  ul {list-style-type: none}
  a {text-decoration: none}
  button {cursor: pointer; background: transparent; border: 0}
`;