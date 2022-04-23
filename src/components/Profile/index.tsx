import { Container, DataProfile } from "./styles";

interface ProfileProps {
  name?: string;
  email?: string;
  avatarUrl?: string;
  signOut: () => void;
}

export function Profile({ name, email, avatarUrl, signOut }: ProfileProps) {
  return (
    <Container onClick={signOut}>
      <img src={avatarUrl} alt={name} width={53} height={53} />
      <DataProfile>
        <h3>{name}</h3>
        <span>{email}</span>
      </DataProfile>
    </Container>
  );
}
