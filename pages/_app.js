function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-x-hidden">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
