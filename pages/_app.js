import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import { light } from "styles/Themes";
import "normalize.css/normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
