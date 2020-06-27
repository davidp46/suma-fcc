import React, { useState, useEffect } from 'react';
import imgSrc from '../../assets/images/semana-sin-unicel-en-la-fcc.png';
import { EventCard } from '../EventCard';
import { Grid } from './styles';
import { EventsListLoading } from '../Loadings/EventsList';

export const EventsList = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const newEvents = [
      {
        id: 1,
        imgSrc: imgSrc,
        title: 'Semana sin unicel en la FCC',
        description:
          'El grupo SuMA FCC prestó utencilios a la cafeteria de la FCC para dar soporte durante la semana sin unicel. ',
        keyword: 'semana-sin-unicel',
      },
    ];
    setLoading(false);
    setEvents(newEvents);
  }, []);

  return !loading ? (
    <Grid>
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </Grid>
  ) : (
    <EventsListLoading />
  );
};
