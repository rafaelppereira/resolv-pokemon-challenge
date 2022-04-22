import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(90vh - var(--header-height));

  display: flex;
  align-items: center;

  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 3rem 2rem;
  }
`;

export const DataLeft = styled.div`
  flex: 1;

  h2 {
    font-size: 4.5rem;
    line-height: 126%;
    color: var(--white-100);

    span {
      color: var(--pokemon-terciary);
    }
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--white-100);
    opacity: 0.8;
    max-width: 602px;
  }

  button {
    margin-top: 3rem;
    background-color: var(--pokemon-primary);
    color: var(--white-100);
    padding: 1rem 2rem;
    border-radius: 10rem;

    display: flex;
    align-items: center;

    transition: filter 0.2s;

    svg {
      margin-right: 0.5rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 1430px) {
    h2 {
      font-size: 3.8rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 517px) {
    h2 {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 443px) {
    h2 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 375px) {
    h2 {
      font-size: 2.3rem;
    }
  }

`;

export const DataRight = styled.div`
  flex: 0.9;

  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    margin-top: 4rem;
  }
`;
