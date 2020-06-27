import styled from 'styled-components';

export const Card = styled.article`
  width: 288px;
  background-color: var(--card-color);
  border-radius: 26px;
  position: relative;

  &:before {
    content: '';
    background-color: var(--bg-color);
    width: 246px;
    height: 70px;
    box-shadow: 0 4px 21px rgba(var(--shadow-color), 25%);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h5`
  color: var(--primary-color-7);
  margin: 18px 14px 14px;
`;

export const Description = styled.p`
  margin: 0 14px;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`;
