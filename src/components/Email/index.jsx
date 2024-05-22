import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from './styles';
import { Button } from '../Button';

export const ContactUs = () => {
  const form = useRef();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
     .sendForm(
        'service_5d9evh9',
        'template_2rq5s3p',
        form.current,
        {
          publicKey: '3RX6wgg7Yvg8CDVub',
        }
      )
     .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          // Mostra o popup de sucesso

          setShowSuccessPopup(true);


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

        <Button title="Enviar" type="submit" value="Send"></Button>
      </form>

      {/* Popup de Sucesso */}
      {showSuccessPopup && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#1C1C1C', padding: '30px', borderRadius: '8px', border:' 1px solid ' , zIndex: 1000 }}>
          <p>Email enviado com sucesso!</p>
          <button onClick={() => { setShowSuccessPopup(false); window.location.reload(); }}>Fechar</button>
        </div>
      )}
    </Container>
  );
};