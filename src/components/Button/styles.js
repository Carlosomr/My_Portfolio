import styled from "styled-components";

export const Container = styled.button`
width: 100%;
background-color: ${({theme}) => theme.COLORS.ORANGE};
color: ${({theme}) => theme.COLORS.BACKGROUND_800};


border:0;
border-radius: 25px;
font-weight: 500;

&:disabled{
    opacity:0.5;
}
`;