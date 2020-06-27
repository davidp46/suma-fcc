import React, { Fragment, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { Navbar, Brand, Links, StyledLink } from './styles';
import { IconMenu } from './IconMenu';

export const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Navbar>
        <a href="http://carlospereyra.edu.mx/MedioAmbienteFCC/index.html">
          <Brand>
            <img src={Logo} alt="Logo" />
            <h4>Medio Ambiente FCC</h4>
          </Brand>
        </a>
        <IconMenu open={open} setOpen={setOpen} />
        <Links open={open}>
          <a href="http://carlospereyra.edu.mx/MedioAmbienteFCC/about-us.html">Inicio</a>
          <a href="http://carlospereyra.edu.mx/MedioAmbienteFCC/articles.html">
            Acerca de nosotros
          </a>
          <a href="http://carlospereyra.edu.mx/MedioAmbienteFCC/articles.html">Artículos</a>
          <StyledLink to="/SuMA">SuMA</StyledLink>
          <a href="http://carlospereyra.edu.mx/MedioAmbienteFCC/articles.html">Mapa del sitio</a>
        </Links>
      </Navbar>
    </Fragment>
  );
};
