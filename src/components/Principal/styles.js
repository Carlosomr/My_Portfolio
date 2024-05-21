import styled from "styled-components";


export const Container = styled.main``;
export const Main = styled.main`
*{
   background: ${({ theme}) => theme.COLORS.GRAY_50} ;
   -webkit-font-smoothing: antialiased;
}
display: flex;
flex-direction: column;
width: 90%;
margin: auto ;
margin-top: 20px;
border-radius: 8px; 
background:  ${({ theme}) => theme.COLORS.GRAY_50} ;
border: solid ${({ theme}) => theme.COLORS.GRAY_50} ;
h1{
 margin-top: 25px;
 font-size: 30px;
 padding: 15px;
 font-weight: 900;
 
}
span{
    margin-top: 15px;
    font-size: 30px;
    color: ${({ theme}) => theme.COLORS.GREEN} ;
    font-weight: 800;
}
p{
    padding: 15px;
    font-weight: 300;
    line-height: 1.5;
    color: ${({ theme}) => theme.COLORS.GRAY_150} ;
    }

> Button{
    background: ${({ theme}) => theme.COLORS.GREEN};
    color: ${({ theme}) => theme.COLORS.WHITE} ;
    width: 150px;
    height: 50px;
    margin: 20px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
}
> Button:hover{
    background: ${({ theme}) => theme.COLORS.GREEN_2};
}
`;