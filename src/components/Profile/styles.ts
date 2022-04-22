import styled from 'styled-components';

export const Container = styled.button`
  margin-left: 4rem;

  background-color: var(--white-100);
  height: 4.5rem;
  padding: 0 0.9rem;

  display: flex;
  align-items: center;
  border-radius: 10rem;

  img {
    border-radius: 50%;
    flex-shrink: 0;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const DataProfile = styled.div`
  margin-left: 1rem;
  line-height: 21px;
  text-align: left;

  h3 {
    color: var(--gray-500);
    font-weight: 500;
  }

  span {
    color: var(--gray-400);
  }
`;
