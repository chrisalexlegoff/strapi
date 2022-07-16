import React from "react"
import Layout from "../components/Layout"
import client from "../lib/apollo-client"
import { gql } from "@apollo/client"

const demanderUnDevis = ({ logo, hamburger }) => {
  return (
    <Layout logo={logo} hamburger={hamburger}>
      <h1>demander un devis</h1>
    </Layout>
  )
}

export default demanderUnDevis

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Home {
        logo {
          data {
            id
            attributes {
              logo {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
        hamburger {
          data {
            id
            attributes {
              hamburger {
                data {
                  attributes {
                    name
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `,
  })
  return {
    props: {
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
    },
  }
}
