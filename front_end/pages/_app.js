import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect} from "react";
import {UserProvider} from "@auth0/nextjs-auth0";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <UserProvider
        domain="contrucktor.eu.auth0.com">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
