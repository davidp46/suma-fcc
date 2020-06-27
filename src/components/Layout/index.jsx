import React, { Fragment } from 'react';
import { GlobalStyles } from '../../assets/styles/global';
import { Content } from './styles';
import { Menu } from '../Menu';

export const Layout = (props) => (
  <Fragment>
    <GlobalStyles />
    <Menu />
    <Content>{props.children}</Content>
  </Fragment>
);
