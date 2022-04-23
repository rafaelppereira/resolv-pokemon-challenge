import Image from "next/image";
import { useState } from "react";

import { Alert } from "../Alert";
import { Container, ContentRight } from "./styles";

interface CardProps {
  name: string;
}

export function Card({ name }: CardProps) {
  const nameFormatted = name.split('-').join(" ");
  const [isAvaliable, setIsAvaliable] = useState(true);
  const [alert, setAlert] = useState(false);

  //This function is used to disable a location
  function handleRemoveLocation() {
    setIsAvaliable(false);
    handleFunctionCloseAlert();
  }

  //This function is used to open the alert
  function handleFunctionOpenAlert() {
    setAlert(true);
  }

  //This function is used to close the alert
  function handleFunctionCloseAlert() {
    setAlert(false);
  }

  return (
    <>
      <Container avaliable={isAvaliable}>
        <Image
          src="/map.png"
          alt="Mapa das localizações"
          width="100"
          height="110"
        />
        <ContentRight>
          <h2>{nameFormatted}</h2>
          {isAvaliable ? (
            <button
              onClick={handleFunctionOpenAlert}
            >
              Visitar
            </button>
          ) : (
            <button disabled>
              Já visitado
            </button>
          )}
        </ContentRight>
      </Container>
      {alert && (
        <Alert onClose={handleFunctionCloseAlert} cityName={nameFormatted} remove={handleRemoveLocation} />
      )}
    </>
  );
}
