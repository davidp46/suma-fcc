import React from 'react';
import { Card, Image, Title, Description } from './styles';

export const EventCard = ({ imgSrc, title, description, keyword } = {}) => (
  <Card>
    <a href={`/SuMA/${keyword}`}>
      <Image src={imgSrc} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </a>
  </Card>
);
