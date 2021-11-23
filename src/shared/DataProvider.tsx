import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";

const API_URL = "https://innovativa2021.ey.r.appspot.com/graphql";
const WS_URL = "wss://innovativa2021.ey.r.appspot.com/graphql";
const API_AUTH_TOKEN = process.env.REACT_APP_API_AUTH_TOKEN;

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: API_AUTH_TOKEN ? `Bearer ${API_AUTH_TOKEN}` : "",
  },
}));

const wsLink = new WebSocketLink({
  uri: WS_URL,
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: API_URL,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});

interface DataProviderProps {
  children: React.ReactNode;
}
export const DataProvider = (props: DataProviderProps) => {
  const { children } = props;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
