import { ApolloClient, InMemoryCache } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"

const client = new ApolloClient({
  link: createUploadLink({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API}`,
    fetchOptions: {
      mode: "no-cors",
    },
  }),
  cache: new InMemoryCache(),
})

export default client
