import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Container} from './styles';
import { Button } from '../Button';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5d9evh9', 
        'template_2rq5s3p', 
        form.current, {
        publicKey: '3RX6wgg7Yvg8CDVub',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>

    
    <form ref={form} onSubmit={sendEmail}>
      <legend>Entre em contato </legend>
      <label>Nome:</label>
      <input type="text" name="to_name" />
      <label>Email:</label>
      <input type="email" name="from_name" />
      <label>Envie sua mensagem</label>
      <textarea name="message" />

      
      <Button title= "Enviar" type= "submit" value= "Send"></Button>
    </form>
    </Container>
  );
};