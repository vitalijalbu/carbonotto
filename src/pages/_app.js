import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@/assets/styles/index.scss';

import Header from '@/shared/partials/header';
import Footer from '@/shared/partials/footer';


function MyApp({ Component, pageProps }) {
  return (
      <div id="main-site">
        <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header/>
    <Component {...pageProps} />
    <Footer/>
    </MantineProvider>
    </div>
  )
}

export default MyApp
