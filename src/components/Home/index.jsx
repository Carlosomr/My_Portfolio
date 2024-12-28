import { ContainerHome} from "./styles";
import imagem from '../../assets/imagem.png';

export function Home (){
    return(
        <ContainerHome>
            
                <div>
                <p>Ajudando empresas a construírem <br/>
                <strong>produtos digitais</strong> de forma moderna e <br></br>de alta qualidade.</p>
                <img src={imagem} alt="Foto inicial do site" />
                </div>
                
            
            
        </ContainerHome>
    )
}