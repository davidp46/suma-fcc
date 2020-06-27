import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Title, Description } from './styles';

export const EventCard = ({ imgSrc, title, description, keyword } = {}) => (
  <Card>
    <Link to={`/SuMA/${keyword}`}>
      <Image src={imgSrc} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Link>
  </Card>
);
