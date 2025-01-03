import styled from "styled-components";



export const Container = styled.footer`

display: flex;
margin: auto;
width: 100%;

background: ${({ theme}) => theme.COLORS.WHITE};
div{
    display: flex;
    flex-direction: column;
    
}
> form{
    display: flex;
    flex-direction: column;
    margin: auto;
  //  border: solid red;
    width: 100%;
    background: ${({ theme}) => theme.COLORS.WHITE};
    color: ${({ theme}) => theme.COLORS.BLACK};
}
legend{
    margin: auto;
    font-weight: 800;
    font-size: 2rem;
    background: ${({ theme}) => theme.COLORS.WHITE};
    color: ${({ theme}) => theme.COLORS.LILAS};
}
input{
    background: ${({ theme}) => theme.COLORS.GRAY_40} ;
    border: none;
    width: 100%;
    height: 25px;
    margin-top: 8px;
    margin-bottom: 8px;
    color: ${({ theme}) => theme.COLORS.GREEN} ;
}
label{
    width: 50%;
    background: ${({ theme}) => theme.COLORS.WHITE};
    color: ${({ theme}) => theme.COLORS.BLACK};
     
}
textarea{
    border: 0;
    resize: none;
    background: ${({ theme}) => theme.COLORS.GRAY_40} ;
    color: ${({ theme}) => theme.COLORS.GREEN} ;
    margin-top: 8px;
    height: 90px;
}
Button{
    background: ${({ theme}) => theme.COLORS.GREEN};
    max-width: 200px;
    height: 35px;
    margin-top: 15px;
    color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 5px;
    font-weight: 300;
}


@media (max-width: 768px){
    
    display: flex;
    flex-direction: column;
    width: 100%;
}



`;



 




 