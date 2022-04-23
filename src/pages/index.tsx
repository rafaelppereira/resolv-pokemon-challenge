import Head from 'next/head';

import { Card } from '../components/Card';
import { Title } from '../components/Title';
import { Banner } from '../sections/Banner';

import { useFetch } from '../hooks/useFetch';
import { useAuth } from '../hooks/useAuth';

import {
  Main,
  CardContainer,
  Overlay
} from '../styles/Common';

interface Location {
  name: string;
}

export default function Home() {

  //This is a HOOK that brings the user data and login function
  const { user, signInWithGoogle } = useAuth();

  //useFetch is a hook that brings the necessary information from the pokémon api
  const { data: locations } = useFetch<Location[]>(process.env.NEXT_PUBLIC_API_ENDPOINT);

  return (
    <>
      <Head>
        <title>Visite os melhores lugares | Pokémon</title>
      </Head>
      <Main>
        <Banner />
        <Title name="Lugares" />

        {user ? (
          <CardContainer>
            {locations?.map(item => (
              <Card key={item.name} name={item.name}  />
            ))}
          </CardContainer>
        ) : (
          <CardContainer>
            <Overlay>
              <h2>Faça login para visitar...</h2>
              <button onClick={signInWithGoogle}>
                Entrar com o Google
              </button>
            </Overlay>
            <Card name="Location" />
            <Card name="Location" />
            <Card name="Location" />
            <Card name="Location" />
            <Card name="Location" />
            <Card name="Location" />
          </CardContainer>
        )}
      </Main>
    </>
  );
}
