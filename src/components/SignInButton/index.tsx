import { Container } from "./styles";
import { RiGoogleFill } from 'react-icons/ri';

export function SignInButton() {

  const handleSignInWithGoogle = () => {
    //TODO..
  }

  return (
    <Container
      type="button"
      onClick={handleSignInWithGoogle}
    >
      <RiGoogleFill />
      Entrar com o Google
    </Container>
  );
}
