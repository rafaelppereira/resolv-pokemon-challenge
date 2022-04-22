import Image from "next/image";
import { useState } from "react";
import { Alert } from "../Alert";
import { Container, ContentRight } from "./styles";

interface CardProps {
  name: string;
  disabled: string;
}

export function Card({ name, disabled }: CardProps) {
  const nameFormatted = name.split('-').join(" ");
  const [alert, setAlert] = useState(false);

  function handleFunctionOpenAlert() {
    setAlert(true);
  }

  function handleFunctionCloseAlert() {
    setAlert(false);
  }

  return (
    <>
      <Container>
        <Image
          src="/map.png"
          alt="Mapa das localizações"
          width="100"
          height="110"
        />
        <ContentRight>
          <h2>{nameFormatted}</h2>
          <button onClick={handleFunctionOpenAlert}>
            Visitar
          </button>
        </ContentRight>
      </Container>
      {alert && (
        <Alert onClose={handleFunctionCloseAlert} id={name} cityName={nameFormatted} />
      )}
    </>
  );
}
