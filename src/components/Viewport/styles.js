import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(16px);
  background-color: rgba(var(--shadow-color), 0.95);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Close = styled.img`
  position: fixed;
  top: 1rem;
  right: 3rem;
  z-index: 101;
  cursor: pointer;
  box-shadow: 0 2px 16px rgba(var(--shadow-color), 0.24);
`;
