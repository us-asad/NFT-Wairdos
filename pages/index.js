import Head from "next/head";
import { Header, Footer, About, Faq, Home, Roadmap, Showcase, Team } from "components";

export default function Main() {
  return (
    <>
      <Head>
        <title>NFT Landing Page</title>
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
      </main>
    </>
  );
}