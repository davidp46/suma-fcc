import React from 'react';
import iconClose from '../../assets/images/icon-close.svg';
import { Container, Close } from './styles';

export const Viewport = ({ image = '', setImage, setOpen } = {}) => (
  <Container>
    <Close
      onClick={() => {
        setImage('');
        setOpen(false);
      }}
      src={iconClose}
    />
    <img src={image} alt="icon-close" />
  </Container>
);
