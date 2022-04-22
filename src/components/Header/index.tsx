import Image from "next/image";

import { NavLink } from "../NavLink";
import { Profile } from "../Profile";
import { SignInButton } from "../SignInButton";

import { Container } from "../../styles/Common";
import {
  Content,
  LogoContainer,
  DataRight,
  Menu
} from "./styles";

export function Header() {
  const isAuthenticated = true;

  return (
    <Content>
      <Container>
        <LogoContainer>
          <Image
            src="/logo.svg"
            alt="Logo Pokémon"
            width="160"
            height="90"
          />
        </LogoContainer>
        <DataRight>
          <Menu>
            <NavLink url="/">Pokedex</NavLink>
            <NavLink url="/">Games & Apps</NavLink>
            <NavLink url="/">Tcg</NavLink>
            <NavLink url="/">Events</NavLink>
          </Menu>
          {isAuthenticated ? (
            <Profile name="Rafael Pereira" email="rafaelsantospereira03@gmail.com" avatarUrl="/profile.png" />
          ) : (
            <SignInButton />
          )}
        </DataRight>
      </Container>
    </Content>
  );
}
