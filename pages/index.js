import Head from "next/head";
import { Header, Footer, About, Faq, Home, Roadmap, Showcase, Team, ScrollToTop } from "components";

export default function Main() {
  return (
    <>
      <Head>
        <title>NFT WEIRDOS &#128293;</title>
        <meta name="description" content="Welcome to NFT WEIRDOS &#128293;" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <main>
        <Header />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}