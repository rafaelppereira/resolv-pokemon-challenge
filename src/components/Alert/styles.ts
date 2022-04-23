import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`;

export const Content = styled.div`
  background: var(--white-100);
  width: 100%;
  max-width: 500px;
  padding: 3rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const TitleText = styled.strong`
  font-size: 2rem;
  color: var(--gray-500);
  line-height: 120%;

  span {
    font-size: 1.5rem;
    font-weight:400;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  svg {
    font-size: 1.5rem;
    color: var(--gray-500);
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const CloseButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: var(--notification-error);
  color: var(--white-100);
  border-radius: 0.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const AcceptButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: var(--notification-success);
  color: var(--white-100);
  border-radius: 0.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

