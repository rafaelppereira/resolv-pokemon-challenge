import styled, { css } from 'styled-components';

interface IContainerProps {
  avaliable: boolean;
}

export const Container = styled.div<IContainerProps>`
  background-color: var(--pokemon-secondary);

  padding: 1rem;
  border-radius: 2rem;

  display: flex;
  align-items: center;

  ${props =>
    !props.avaliable &&
    css`
      opacity: 0.3;
    `};
`;

export const ContentRight = styled.div`
  margin-left: 1.4rem;

  h2 {
    color: var(--white-100);
    font-weight: 400;
    text-transform: capitalize;
  }

  button {
    background-color: var(--pokemon-terciary);
    color: var(--white-100);
    width: 170px;
    padding: 0.3rem 0;
    margin-top: 0.8rem;
    border-radius: 2rem;

    transition:filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;

      &:hover {
        filter: brightness(1);
      }
    }
  }
`;
