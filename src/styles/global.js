import { createGlobalStyle } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css'

export default createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: rgba(5, 51, 26, 0.808);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    /* aqui vai dar bo */
}

html.body,#root{
    height: 100%;
}



`;
