import Head from 'next/head';

export default function Home() {
  return null;
}

export const getServerSideProps = () => {
  const isAuthenticated = true;

  if (isAuthenticated == true) {
    return {
      redirect: {
        destination: '/app',
        permanent: true,
      }
    }
  } else {
    return {
      redirect: {
        destinantion: '/app',
        permanent: true,
      }
    }
  }
  
  return {
    props: {},
  }
}
