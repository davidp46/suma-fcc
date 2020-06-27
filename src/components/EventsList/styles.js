import styled from 'styled-components';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 288px);
  gap: 2.5rem;
  @media screen and (max-width: 640px) {
    justify-content: center;
  }
  @media screen and (max-width: 943px) {
    justify-content: center;
  }
`;
