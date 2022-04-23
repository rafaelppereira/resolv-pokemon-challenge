import {
  Content,
  Container,
  TitleText,
  ButtonClose,
  ButtonContainer,
  CloseButton,
  AcceptButton
} from './styles';

import { RiCloseFill } from 'react-icons/ri';

interface AlertProps {
  cityName: string;
  onClose: () => void;
  remove: () => void;
}

export function Alert({onClose, cityName, remove}: AlertProps) {
  return (
    <Container>
      <Content>
        <TitleText>Você quer visitar <br /> <span>{cityName}?</span></TitleText>

        <ButtonContainer>
          <CloseButton onClick={onClose}>
            Não
          </CloseButton>
          <AcceptButton onClick={remove}>
            Sim
          </AcceptButton>
        </ButtonContainer>

        <ButtonClose onClick={onClose}>
          <RiCloseFill />
        </ButtonClose>
      </Content>
    </Container>
  )
}
