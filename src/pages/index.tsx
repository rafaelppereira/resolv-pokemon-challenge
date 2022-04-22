import Head from 'next/head';

import { Title } from '../components/Title';
import { Banner } from '../sections/Banner';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

import { Main, CardContainer, Overlay } from '../styles/Common';
import { useAuth } from '../hooks/useAuth';

interface Location {
  name: string;
}

export default function Home() {
  const { data: locations } = useFetch<Location[]>('https://pokeapi.co/api/v2/location/');
  const { user, signInWithGoogle } = useAuth();

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
              <Card key={item.name} name={item.name} disabled="disabled" />
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
            <Card name="Location" disabled="disabled"/>
            <Card name="Location" disabled="disabled"/>
            <Card name="Location" disabled="disabled"/>
            <Card name="Location" disabled="disabled"/>
            <Card name="Location" disabled="disabled"/>
            <Card name="Location" disabled="disabled"/>
          </CardContainer>
        )}
      </Main>
    </>
  );
}
