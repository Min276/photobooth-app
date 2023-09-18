import React from 'react';
import type { GetStaticProps, NextPage } from "next";
import Head from 'next/head';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import LandingPage from '../components/LandingPage';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('../components/LandingPage'), {
  ssr: false, // This disables server-side rendering for the component
});

function Home() {

  return (
    <React.Fragment>
      <Head>
        <title>PhotoBooth MM App</title>
      </Head>
      <LandingPage />
    </React.Fragment>
  );
}

// export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// };


export default Home;
