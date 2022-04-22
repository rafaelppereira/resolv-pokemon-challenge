import styled from 'styled-components';

export const Container = styled.button`
  margin-left: 4rem;

  background-color: var(--pokemon-secondary);
  height: 4.5rem;
  padding: 0 2rem;

  color: var(--white-100);

  display: flex;
  align-items: center;
  border-radius: 10rem;

  transition: filter 0.2s;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
