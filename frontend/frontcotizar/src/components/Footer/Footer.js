
import React from 'react';



const Footer = () => {
  return (
    <footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center "> 
    <p class="footer-texto text-center size">¡Cotiza y Decide con Cotizar.com!</p>
    <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
     <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
       <i class="bi bi-twitter"></i>
     </a>
     
     <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
       <i class="bi bi-linkedin"></i>
     </a>
     <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
       <i class="bi bi-instagram"></i>
     </a>
     <a href="mailto:cotizarcom2@gmail.com" target="_blank" rel="noopener noreferrer">
       <i class="bi bi-envelope"></i>
     </a>
    </div>
    <div class="derechos-de-autor">Derechos reservados, COTIZAR.COM (2023) &#169;</div>
   </footer>
  );
};

export default Footer;

