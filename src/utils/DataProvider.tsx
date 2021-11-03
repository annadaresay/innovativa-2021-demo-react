import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const API_URL = "https://thecube.daresaycloud.co/graphql"; // TODO: Update
const WS_URL = "ws://thecube.daresaycloud.co/graphql"; // TODO: Update

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
  link: splitLink,
  cache: new InMemoryCache(),
});

interface DataProviderProps {
  children: React.ReactNode;
}
export const DataProvider = (props: DataProviderProps) => {
  const { children } = props;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
