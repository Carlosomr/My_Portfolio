import { Button } from "../../components/Button";
import { ContactUs } from "../../components/Email";
import { Home } from "../../components/Home";
import { Sidebar } from "../../components/Sidebar";
import { Sobre } from "../../components/Sobre";
import { Container } from "./style";

export function Details() {
  

  return (
    <Container>
      <Sidebar/>
      <Home/>
      <Sobre/>
      
    </Container>
    
    
  )
}

