import "../styles/globals.css";
import "swiper/css";
import "swiper/css/autoplay";

import "../public/assets/fontawesome/css/all.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";

import type { AppProps } from "next/app";
import { GRAPHQL_URL } from "@config/constants";

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
