import styled from 'styled-components'


export const Profile = styled.div`
    margin-top: 200px;
    //border: solid red;
    width: 100%;
    height: 100%;
 
`;

export const ProfileContainer = styled.div`
animation: slide-in 2s forwards;
display: flex;
margin: 100px auto;
max-width: 1200px;
background: ${({ theme}) => theme.COLORS.GRAY_800};
border: solid 1px ${({ theme}) => theme.COLORS.GRAY_300};

div{
//border: solid red;
display: flex;
flex-direction: column;
text-align: justify;
background: ${({ theme}) => theme.COLORS.GRAY_800};
}
img {
    //border: solid red;
    height: 450px;
    width: 650px;
    object-fit: cover;
  }

h2{
    background: ${({ theme}) => theme.COLORS.GRAY_800};
    color: ${({ theme}) => theme.COLORS.LILAS};
    font-weight: 800;
    font-size: 1.2rem;
    margin: 20px;
    
}
h1{
    background: ${({ theme}) => theme.COLORS.GRAY_800};
    font-size: 2rem;
    margin-left: 20px;
    color: ${({ theme}) => theme.COLORS.WHITE};
}
span{
    background: ${({ theme}) => theme.COLORS.GRAY_800};
    margin: 20px;
    color: ${({ theme}) => theme.COLORS.LILAS};
    
}

p{
    background: ${({ theme}) => theme.COLORS.GRAY_800};
    margin-left: 10px;
    line-height: 25px;
    padding: 10px;
}

`;