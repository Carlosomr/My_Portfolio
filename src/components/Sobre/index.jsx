import {Profile, ProfileContainer} from "./styles";
import imagem from '../../assets/programadorPc.png';
export function Sobre (){
    return(
        <Profile>
            <ProfileContainer>
            <img src={imagem} alt="Foto de um programador" />
            <div>
            <h2>Quem sou</h2>
            <h1>Carlos Moura</h1>
            <span>Desenvolverdor Frontend e Analista de BI</span>
            <p>Meu nome é Carlos Eduardo Moura. <br/>
            Atualmente sou freelancer como Frontend Developer e analista de dados. <br/> 
            Desenvolvo interfaces modernas e de alta qualidade, <br/>
            concentrado em performance, animações, responsividade.<br/> 
            Também atuo como analista de BI, <br/>
            transformando os dados da sua empresa em insigts, melhorando o seu negocio com graficos<br/> 
            no power bi e construção de relatorios.
            </p>
            </div>
           

            </ProfileContainer>
        </Profile>
    )
}