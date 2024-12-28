import styled from "styled-components";

export const Container = styled.div``;
export const Aside = styled.aside`


div{
    margin: auto;
    padding: 25px;
    background: ${({ theme}) => theme.COLORS.WHITE};
}
ul{
    display: flex;
    gap: 25px;
    justify-content: center;
    list-style: none;
    background: ${({ theme}) => theme.COLORS.WHITE};
}
a{
    text-decoration: none;
    font-size: 1.2rem;
    background: ${({ theme}) => theme.COLORS.WHITE};
    color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
}

`;