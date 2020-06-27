import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: var(--height-hero);
  background: ${({ hero }) => (hero ? `url(${hero})` : 'var(--primary-color-7)')};
  background: linear-gradient(
      rgba(var(--hero-gradient-color-1), 0.42),
      rgba(var(--hero-gradient-color-2), 1)
    ),
    ${({ hero }) => (hero ? `url(${hero})` : 'red')};
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const HeroContent = styled.div`
  display: inline-block;
  width: var(--max-width-view);
  color: var(--white-color);
  padding: 2rem 0;
  @media screen and (max-width: 960px) {
    padding: 2rem;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  a,
  Link {
    color: var(--primary-color-2);
  }
  p {
    color: var(--gray-color-4);
  }
`;

export const Bread = styled.img`
  margin: 0 0.5rem;
`;
