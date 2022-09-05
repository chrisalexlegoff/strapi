import { ApolloClient, InMemoryCache } from "@apollo/client"
const client = new ApolloClient({
  ssrMode: true,
  uri: `${process.env.REACT_APP_PUBLIC_STRAPI_GRAPHQL_API}`,
  cache: new InMemoryCache(),
})

export default client
