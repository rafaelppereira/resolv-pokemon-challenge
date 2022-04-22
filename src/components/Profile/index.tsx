import Image from "next/image";
import { Container, DataProfile } from "./styles";

interface ProfileProps {
  name?: string;
  email?: string;
  avatarUrl?: string;
}

export function Profile({ name, email, avatarUrl }: ProfileProps) {
  return (
    <Container>
      <Image
        src={avatarUrl}
        alt={name}
        width={53}
        height={53}
      />
      <DataProfile>
        <h3>{name}</h3>
        <span>rafaelsantospereira03@...</span>
      </DataProfile>
    </Container>
  );
}
