import Link from "next/link";
import { Container } from "./styles";

import { RiHeartPulseFill } from 'react-icons/ri';

export function Footer() {
  return (
    <Container>
      <h4>Desenvolvido e estruturado com muito <RiHeartPulseFill />  por <Link href="https://www.linkedin.com/in/rafael-pereira-2089841b0/" passHref>Rafael Pereira</Link></h4>
    </Container>
  );
}
