import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(106.34deg, #5731AE -2.02%, #26124C 100.85%);
  border-top: 2px solid var(--pokemon-secondary);

  padding: 2rem 0;
  text-align: center;

  h4 {
    font-weight: 400;
    color: var(--white-100);

    svg {
      position: relative;
      top: 2px;
    }

    a {
      color: var(--pokemon-terciary);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
