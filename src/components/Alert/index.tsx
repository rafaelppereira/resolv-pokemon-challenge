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
  onClose: () => void;
  cityName: string;
  id: string;
}

export function Alert({onClose, cityName, id}: AlertProps) {
  return (
    <Container>
      <Content>
        <TitleText>Você quer visitar <br /> <span>{cityName}?</span></TitleText>

        <ButtonContainer>
          <CloseButton onClick={onClose}>
            Não
          </CloseButton>
          <AcceptButton>
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
