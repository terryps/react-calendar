import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    
    body {
        margin: 0;
        padding: 0;
    };
    
    /* roboto-regular - latin */
    @font-face {
        font-family: "Roboto";
        src: url('fonts/roboto-v27-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
             url('fonts/roboto-v27-latin-regular.woff') format('woff'), /* Modern Browsers */
             url('fonts/roboto-v27-latin-regular.ttf') format('truetype'); /* Safari, Android, iOS */
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family:'Exo';
        src: url('fonts/Exo-BlackItalic.eot');
        src: url('fonts/Exo-BlackItalic.eot?#iefix') format('embedded-opentype'),
             url('fonts/Exo-BlackItalic.woff2') format('woff2'),
             url('fonts/Exo-BlackItalic.woff') format('woff'),
             url('fonts/Exo-BlackItalic.ttf') format('truetype');
        font-weight: 900;
        font-style: italic;
        font-display: swap;
    }
    
    /* noto-sans-kr-thin - korean */
    @font-face {
        font-family: "Roboto";
        src: url('fonts/NotoSansKR-Thin-Hestia.woff') format('woff');
        font-weight: 100;
        font-style: normal;
        font-display: swap;

        unicode-range: U+AC00-D7AF;       
    }
`;

export default GlobalStyles;