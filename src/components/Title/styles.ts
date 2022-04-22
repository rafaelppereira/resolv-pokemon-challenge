import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    text-transform: uppercase;
    color: var(--white-100);
    font-weight: 500;
    font-size: 3rem;
    position: relative;

    padding: 0 10px;
  }
`;

export const Line = styled.div`
  display: inline-flex;
  width: 100%;
  height:2px;
  background-color: var(--pokemon-terciary);

  position: absolute;
  left: 0;
  bottom: 0;
`;
