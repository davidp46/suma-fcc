import styled from 'styled-components';

export const Content = styled.main`
  --white-color: #fff;
  margin-top: calc(var(--height-hero) + 2rem);
  background: var(--white-color);
  border: 1px solid var(--gray-color-2);
  border-radius: 0.875rem;
  padding: 2rem;

  p {
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 1rem;
  }
`;

export const Gallery = styled.section`
  margin-bottom: 3.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 250px));
  gap: 1rem;
  justify-content: center;

  img {
    max-width: 250px;
    align-self: center;
    justify-self: center;
    border-radius: 9px;
    border: 1px solid var(--gray-color-2);
  }
`;
