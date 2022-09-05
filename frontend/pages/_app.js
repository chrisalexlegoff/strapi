import { ApolloProvider } from "@apollo/client"
import React from "react"
import client from "../lib/apollo-client"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
