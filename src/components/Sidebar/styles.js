import styled from "styled-components";


export const Aside = styled.aside`
> img {
    margin: auto ;
    margin-top: 50px;
    width: 156px;
    height: 156px;
    border-radius:50%;
    border: 2.5px solid ${({ theme}) => theme.COLORS.GRAY_300};

}
display: flex;
flex-direction: column;
width: 90%;
margin: auto ;
margin-top: 50px;
border-radius: 8px; 
background:  ${({ theme}) => theme.COLORS.GRAY_50} ;
border: solid ${({ theme}) => theme.COLORS.GRAY_50} ;
div{
    display: flex;
    flex-direction: column;
    background:  ${({ theme}) => theme.COLORS.GRAY_50};
    margin-top: 5px;
    padding: 25px;
    gap: 10px;
}
strong{
    background:  ${({ theme}) => theme.COLORS.GRAY_50};
    margin: auto;
    font-weight: 500;
    font-size: 18px;
    
}
    
span {
    background:  ${({ theme}) => theme.COLORS.GRAY_50};
    margin: auto;
    color:  ${({ theme}) => theme.COLORS.GREEN};
    font-weight: 500;
    
}

`;