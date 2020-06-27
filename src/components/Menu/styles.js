import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navbar = styled.header`
  width: 100%;
  height: 60px;
  background: linear-gradient(var(--primary-color-4), var(--primary-color-5));
  display: flex;
  align-items: center;
  padding: 0 var(--navbar-padding);
  position: sticky;
  top: 0;
  z-index: 100;
  @media screen and (max-width: 936px) {
    & {
      --navbar-padding: 1.5rem;
      padding: 0 var(--navbar-padding);
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Brand = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.5rem;

  h4 {
    align-self: center;
  }
`;

export const Links = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, auto);
  column-gap: 1.5rem;
  margin-left: var(--margin-left-link);

  a,
  StyledLink {
    align-self: center;
  }

  @media screen and (max-width: 936px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(5, 56px);
    gap: 1rem;
    padding: 1.5rem 1rem;
    position: fixed;
    top: 60px;
    right: ${({ open }) => (open ? '0' : '-320px')};
    width: 320px;
    height: 393px;
    border-radius: 0 0 22px 22px;
    z-index: 100;
    background: var(--primary-color-6);

    & a,
    StyledLink {
      font-size: 18px;
      font-weight: 500;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 6px 0.5rem;
    }
  }

  @media screen and (max-width: 412px) {
    right: ${({ open }) => (open ? '0' : '-320px')};
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    padding: 6px 0.5rem;
    background-color: var(--primary-color-7);
    color: var(--white-color);
    border-radius: 7px;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  @media screen and (min-width: 936px) {
    display: none;
  }
`;
