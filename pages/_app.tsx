import type { AppProps } from "next/app";
import { styled } from "linaria/react";

//#region css

const Layout = styled.div`
  background-color: #fafafb;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

//#endregion

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
