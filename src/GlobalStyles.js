import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        height: 100vh;
        overflow-x: hidden;
        background-color: ${theme.neutral.charcoalGrey};
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Roboto, sans-serif;
    }
`;
