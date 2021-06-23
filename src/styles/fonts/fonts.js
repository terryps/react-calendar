import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: 'Roboto';
        font-weight: 300;
    }
    
    @font-face{
        font-family: 'Noto Sans KR';
        font-style: Light;
        font-weight: 300;
        unicode-range: U+AC00-D7AF;
    }
    body{font-family: 'Roboto', 'Noto Sans KR', 'Exo'}
`;