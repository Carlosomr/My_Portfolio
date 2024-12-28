import { Container, Aside} from "./styles";



export function Sidebar (){
    return(
        <Container>
        <Aside>
        <div>
            <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Contato</a></li>
            </ul>  
        </div>   
            
        </Aside>

        </Container>
            
        
    )
}