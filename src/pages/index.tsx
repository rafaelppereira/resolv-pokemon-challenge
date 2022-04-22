import Head from 'next/head';

import { Title } from '../components/Title';
import { Banner } from '../sections/Banner';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

import { Main, CardContainer } from '../styles/Common';

interface Location {
  name: string;
}

export default function Home() {
  const { data: locations, isFetching } = useFetch<Location[]>('https://pokeapi.co/api/v2/location/');

  return (
    <>
      <Head>
        <title>Visite os melhores lugares | Pokémon</title>
      </Head>
      <Main>
        <Banner />
        <Title name="Lugares" />
        <CardContainer>
          {locations?.map(item => (
            <Card key={item.name} name={item.name} />
          ))}

        </CardContainer>
      </Main>
    </>
  );
}
