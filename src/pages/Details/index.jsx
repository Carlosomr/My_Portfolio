import { Button } from "../../components/Button";
import { ContactUs } from "../../components/Email";
import { Principal } from "../../components/Principal";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "./style";

export function Details() {
  

  return (
    <Container>
      <Sidebar/>
      <Principal/>
      <ContactUs></ContactUs>
    </Container>
    
    
  )
}

