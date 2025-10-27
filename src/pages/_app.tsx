import { Analytics } from "@vercel/analytics/next";
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeManagerProvider } from '@/src/context/app-manager';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luca Schutz | Full‑Stack Engineer, Software Architect & Tech Lead</title>
        <meta name='description' content='Software Engineer with a postgraduate degree deeply interested in the human dimension of technology.' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <SessionProvider session={pageProps.session}>
        <ThemeManagerProvider>
          <Component {...pageProps} />
        </ThemeManagerProvider>
      </SessionProvider>
      <Analytics />
    </>
  );
}
