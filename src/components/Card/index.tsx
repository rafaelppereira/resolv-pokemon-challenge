import Image from "next/image";
import { Container, ContentRight } from "./styles";

interface CardProps {
  name: string;
}

export function Card({ name }: CardProps) {
  const nameFormatted = name.split('-').join(" ");

  return (
    <Container>
      <Image
        src="/map.png"
        alt="Mapa das localizações"
        width="100"
        height="110"
      />
      <ContentRight>
        <h2>{nameFormatted}</h2>
        <button>
          Visitar
        </button>
      </ContentRight>
    </Container>
  );
}
