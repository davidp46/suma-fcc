import React from 'react';
import { Content, Gallery } from './styles';

export const EventContent = ({ content = [], setOpen, setImage } = {}) => (
  <Content>
    {content.map((element, i) =>
      element.type !== 'Gallery' ? (
        <element.type key={i}>{element.content}</element.type>
      ) : (
        <Gallery key={i}>
          {element.content.map((image, j) => (
            <img
              src={image.src}
              key={j}
              onClick={() => {
                setImage(image.src);
                setOpen(true);
              }}
              alt={`item-${j}`}
            />
          ))}
        </Gallery>
      )
    )}
  </Content>
);
