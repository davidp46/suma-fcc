import React, { Fragment } from 'react';
import icon from '../../assets/images/icon-menu.svg';
import { Icon } from './styles';

export const IconMenu = ({ open, setOpen }) => (
  <Fragment>
    <Icon src={icon} alt="Icono" onClick={() => setOpen(!open)} />
  </Fragment>
);
