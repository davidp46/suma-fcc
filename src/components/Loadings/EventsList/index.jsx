import React from 'react';
import { Grid } from '../../EventsList/styles';
import { EventCardLoading } from '../EventCard';

export const EventsListLoading = () => (
  <Grid>
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <EventCardLoading key={i} />
    ))}
  </Grid>
);
