import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: var(--header-height);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 2rem;
    text-align: center;
  }
`;

export const Main = styled.div`
  background: linear-gradient(106.34deg, #5731AE -2.02%, #26124C 100.85%);
`;

export const CardContainer = styled.div`
  max-width: 1440px;
  margin: 6rem auto 0 auto;
  padding: 2rem 2rem 6rem 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: calc(100% - 5rem);

  z-index: 998;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(180deg, rgba(50, 25, 99, 0.3) 0%, #26134F 100%);
  backdrop-filter: blur(5px);

  border-radius: 2rem;
  text-align: center;

  h2 {
    font-size: 3rem;
    font-weight: 500;
    color: var(--white-100);
  }

  button {
    background-color: var(--pokemon-terciary);
    padding: 1rem 2rem;
    border-radius: 10rem;
    margin-top: 1rem;
    color: var(--white-100);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
