/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';



const Footer = () => {
  return (
    <footer>
      <hr className="mt-5 mb-4 " />
      <p className="text-muted">
      &copy; {(new Date().getFullYear())} COTIZAR.COM, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a>
      </p>
    </footer>
  );
};

export default Footer;

