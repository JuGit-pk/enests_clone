import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GRAPHQL_URL } from "@config/constants";
import "../public/assets/fontawesome/css/all.css";
import {
  InMemoryCache,
  gql,
  ApolloClient,
  ApolloProvider,
} from "@apollo/client";

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
