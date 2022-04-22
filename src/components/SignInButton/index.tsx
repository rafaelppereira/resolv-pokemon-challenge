import { Container } from "./styles";
import { RiGoogleFill } from 'react-icons/ri';
import { useAuth } from "../../hooks/useAuth";

export function SignInButton() {
  const { signInWithGoogle } = useAuth();

  return (
    <Container
      type="button"
      onClick={signInWithGoogle}
    >
      <RiGoogleFill />
      Entrar com o Google
    </Container>
  );
}
