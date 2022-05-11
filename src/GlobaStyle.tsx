import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'DungGeunMo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body{
    font-family: 'DungGeunMo';
    font-size: 30px;
    

}

#Wrapper{
    flex:1;
    display : flex;
    flex-direction:column;
}


`
export default GlobalStyle;