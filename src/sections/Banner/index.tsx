import { RiPlayFill } from "react-icons/ri";
import { Container, DataLeft, DataRight } from "./styles";

import Image from 'next/image';

export function Banner() {
  const handleClickScrollButton = () => {
    window.scroll({
      top: 800,
      behavior: "smooth"
    })
  }

  return (
    <Container>
      <DataLeft>
        <h2>Sua melhor <br /> aventura <span>Pokémon</span></h2>
        <p>
          Localize os lugares perfeitos que podem ser visitados
          por meio da sua Pokedex.
        </p>
        <button onClick={handleClickScrollButton}>
          <RiPlayFill />
          Começar a aventura
        </button>
      </DataLeft>
      <DataRight>
        <Image
          src="/hero.png"
          alt="Hero da aplicação"
          width="559"
          height="559"
        />
      </DataRight>
    </Container>
  );
}
