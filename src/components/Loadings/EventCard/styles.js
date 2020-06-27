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

export const Content = styled.div`
  padding: 18px 14px 24px 14px;
`;

export const Image = styled.div`
  width: 100%;
  height: 231px;
  /* background: var(--gray-color-3); */
  background: linear-gradient(to right, var(--gray-color-2), var(--gray-color-3));
  border-radius: 26px 26px 0 0;
`;

export const Title = styled.div`
  height: 24px;
  /* background: var(--gray-color-3); */
  background: linear-gradient(to right, var(--gray-color-2), var(--gray-color-3));
  margin: 18px 14px 14px;
`;

export const Description = styled.div`
  margin: 0 14px;
  margin-bottom: 1.5rem;
  height: 56px;
  /* background: var(--gray-color-3); */
  background: linear-gradient(to right, var(--gray-color-2), var(--gray-color-3));
`;
