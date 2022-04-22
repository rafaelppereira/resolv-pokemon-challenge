import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: var(--header-height);
`;

export const Main = styled.div`
  background: linear-gradient(106.34deg, #5731AE -2.02%, #26124C 100.85%);
`;

export const CardContainer = styled.div`
  max-width: 1440px;
  margin: 6rem auto 0 auto;
  padding: 2rem 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
