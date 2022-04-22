import Image from "next/image";
import { useAuth } from "../../hooks/useAuth";

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
  const { user, signOutWithGoogle } = useAuth();

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
          {user ? (
            <Profile name={user?.name} email={user?.email} avatarUrl={user?.avatar} signOut={signOutWithGoogle} />
          ) : (
            <SignInButton />
          )}
        </DataRight>
      </Container>
    </Content>
  );
}
