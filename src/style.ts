import { createGlobalStyle } from "styled-components";
import c from "./assets/colors";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    zoom: 110%;
    animation: fadeEffect 1s;  /*Fade in the page when loaded*/
    display: grid;
    a:focus {
      outline: none;
    }
    

  }

  body {
    background: ${c.bodyBackground};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
  }



`;

export default GlobalStyle;
