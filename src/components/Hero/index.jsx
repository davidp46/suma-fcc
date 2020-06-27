import React from 'react';
import { HashLink as Link } from 'react-router-dom';
import { HeroContainer, HeroContent, Breadcrumb, Bread } from './styles';
import breadIcon from '../../assets/images/icon-bread.svg';

export const Hero = ({ title, hero } = {}) => {
  return (
    <HeroContainer hero={hero}>
      <HeroContent>
        <Breadcrumb>
          <Link to="/SuMA">SuMA</Link>
          <Bread src={breadIcon} />
          <p>Evento</p>
        </Breadcrumb>
        <h1>{title}</h1>
      </HeroContent>
    </HeroContainer>
  );
};
