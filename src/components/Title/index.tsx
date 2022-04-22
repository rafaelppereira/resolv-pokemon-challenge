import { Container, Line } from "./styles";

interface TitleProps {
  name: string;
}

export function Title({ name }: TitleProps) {
  return (
    <Container>
      <h2>
        {name}
        <Line />
      </h2>
    </Container>
  );
}
