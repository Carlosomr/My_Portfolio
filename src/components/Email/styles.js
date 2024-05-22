import styled from "styled-components";

export const Container = styled.footer`
*{
    background: ${({ theme}) => theme.COLORS.GRAY_50};
    margin-top: 30px;
}

> form{
    display: flex;
    flex-direction: column;
}
legend{
    margin: auto;
    margin-top: 25px;
    font-weight: 300;
    font-size: 20px;
}
input{
    background: ${({ theme}) => theme.COLORS.WHITE} ;
    border-radius: 4px;
    border: none;
    width: 90%;
    height: 25px;
    margin: auto;
    margin-top: 8px;
    margin-bottom: 8px;
    color: ${({ theme}) => theme.COLORS.GREEN} ;
}
label{
    width: 90%;
    margin: auto;
     
}
textarea{
    border: 0;
    resize: none;
    color: ${({ theme}) => theme.COLORS.WHITE} ;
    background: ${({ theme}) => theme.COLORS.WHITE} ;
    width: 90%;
    margin: auto;
    border-radius: 8px;
    color: ${({ theme}) => theme.COLORS.GREEN} ;
    margin-top: 8px;
    height: 90px;
}
Button{
    background: ${({ theme}) => theme.COLORS.GREEN};
    width: 200px;
    height: 35px;
    margin: auto;
    margin-top: 15px;
    color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 8px;
    font-weight: 300;
}
`;



 




 