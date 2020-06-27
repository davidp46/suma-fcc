import React, { Fragment, useState, useEffect } from 'react';
import { Hero } from '../../components/Hero';
import { EventContent } from '../../components/EventContent';
import { Viewport } from '../../components/Viewport';

import HeroImage from '../../assets/images/heroImage.jpg';
import image1 from '../../assets/images/image6.jpg';
import image2 from '../../assets/images/image7.jpg';
import cartel1 from '../../assets/images/cartel1.jpg';
import cartel2 from '../../assets/images/cartel2.jpg';
import cartel3 from '../../assets/images/cartel3.jpg';

export const Event = () => {
  const [event, setEvent] = useState({});
  const [image, setImage] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const newEvent = {
      id: 1,
      title: 'Semana sin unicel en la FCC',
      keyword: 'semana-sin-unicel',
      heroSrc: HeroImage,
      content: [
        {
          type: 'p',
          content:
            'La Semana sin unicel en la FCC se realizó gracias a la participación, organización y colaboración de los integrantes del grupo de medio ambiente de la FCC, el grupo SuMA FCC',
        },
        {
          type: 'h3',
          content: 'Compras',
        },
        {
          type: 'p',
          content:
            'Se realizó las compras de utensilios de plástico no desechables para ser usado como plan emergente para los casos en los cuales las personas que no llevaran sus propios utensilios se les prestaran estos utensilios no desechables y así evitar el uso de unicel en la FCC. Este soporte se realizó en la cafetería de la FCC.',
        },
        {
          type: 'h3',
          content: 'Lavado de utencilios',
        },
        {
          type: 'p',
          content:
            'Pensando en el cuidado de la salud de los usuarios de los utensilios de plástico comprados, el grupo SuMA FCC nos dispusimos a lavar absolutamente todos los utensilios comprados. Tal actividad la realizamos en la cocina de la FCC ( ubicada en el edificio CCO2 ).',
        },
        {
          type: 'p',
          content: 'Primera etapa de lavado y secado de utencilios:',
        },
        {
          type: 'Gallery',
          content: [
            {
              src: image1,
            },
            {
              src: image2,
            },
          ],
        },
        {
          type: 'h3',
          content: 'Diseño de carteles',
        },
        {
          type: 'p',
          content:
            'La estudiante de Diseño Gráfico de la Facultad de Arquitectura de la BUAP MarÍa Fernanda Sierra Gutierréz con matrícula: 201502055 es integrante del grupo SuMA FCC y ha diseñado todos los carteles para los eventos de Medio Ambiente del grupo SuMA FC',
        },
        {
          type: 'Gallery',
          content: [
            {
              src: cartel1,
            },
            {
              src: cartel2,
            },
            {
              src: cartel3,
            },
          ],
        },
      ],
    };
    setEvent(newEvent);
  }, []);

  return (
    <Fragment>
      <Hero title={event.title} hero={event.heroSrc} />
      <EventContent content={event.content} setImage={setImage} setOpen={setOpen} />
      {open && <Viewport image={image} open={open} setImage={setImage} setOpen={setOpen} />}
    </Fragment>
  );
};
