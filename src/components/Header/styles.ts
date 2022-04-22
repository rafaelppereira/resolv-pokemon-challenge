import styled from 'styled-components';

export const Content = styled.div`
  background: linear-gradient(106.34deg, #5731AE -2.02%, #26124C 100.85%);
  border-bottom: 2px solid var(--pokemon-secondary);
`;

export const LogoContainer = styled.div`
  width: 200px;
`;

export const DataRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 1024px) {
    display: none;
  }
`;
