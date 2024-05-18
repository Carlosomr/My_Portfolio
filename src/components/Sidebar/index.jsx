import { Container } from "../../pages/Details/style";
import { Aside } from "./styles";


export function Sidebar (){
    return(
        <Container>
            <Aside>
                <img src="https://github.com/Carlosomr.png" alt="foto do perfil"></img>

                <div>
                <strong>Carlos Eduardo</strong>
                <span>Full Stack Developer</span>
                </div>
                

            </Aside>
        </Container>
    )
}