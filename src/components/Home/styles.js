import styled from 'styled-components'

export const ContainerHome = styled.div `

  div{
    margin-top: 50px;
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    //border: solid red;
  }
  
  p{
    font-size: 2.5rem;
    font-weight: 800;
    animation: slide-in 2s forwards;
    margin: auto;
    padding: 5px;
    //border: solid blue;
  }
  
  strong{
    font-size: 2.5rem;
    color: ${({ theme}) => theme.COLORS.LILAS};
  }

  @keyframes slide-in { 
    0% { transform: translateX(-100%); opacity: 0; } 
    100% { transform: translateX(0); opacity: 1; }
  }

  img {
    //border: solid red;
    height: 400px;
    width: 550px;
    object-fit: cover;
    margin: auto;
    animation: slide-in 2s forwards;
    
   
  }

  @media (max-width: 800px){
    div{
      display: flex;
      flex-direction: column;
      border: solid red;
    }
  img{
    margin: auto;
    width: 300px;
  }
  }
`;