import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect} from "react";
import {Auth0Provider} from "@auth0/auth0-react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <Auth0Provider
        domain="contrucktor.eu.auth0.com"
        clientId="QWJ7pzkJDEXvSM3dKAnx1Lw4m8vhozFj"
        redirectUri="http://localhost:3000/">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  );
}

export default MyApp;
