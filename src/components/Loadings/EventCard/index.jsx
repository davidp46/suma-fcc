import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Card, Content } from './styles';

export const EventCardLoading = () => (
  <Card>
    <Skeleton height={231} style={{ borderRadius: '26px 26px 0 0' }} />
    <Content>
      <Skeleton height={24} />
      <Skeleton height={56} />
    </Content>
  </Card>
);
