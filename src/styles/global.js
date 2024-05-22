import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    background: ${({ theme}) => theme.COLORS.GRAY_40};
    color: ${({ theme}) => theme.COLORS.WHITE};
    font-family: Roboto, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased; 
    font-weight: 400;
    :focus{
        outline: transparent;
        box-shadow: 0 0 0 2px #00875f;
    }
    :root{
        font-size: 87.5% ;
    }
    
}

`


;