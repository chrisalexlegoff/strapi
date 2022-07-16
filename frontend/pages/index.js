import AccueilEntete from "../components/accueil/accueil-entete"
import Layout from "./../components/Layout"
import client from "./../lib/apollo-client"
import { gql } from "@apollo/client"
import React from "react"
import Nous from "./../components/accueil/nous"

export default function Home({ header, nous, logo, hamburger }) {
  return (
    <Layout logo={logo} hamburger={hamburger}>
      <AccueilEntete header={header} />
      <Nous nous={nous} />
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Home {
        home {
          data {
            id
            attributes {
              nous {
                titre3
                paragraphe
                images {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
                button
                titre3bis
                titre4
              }
              header {
                paragraphe
                id
                titrePage
                button
                imageDeco {
                  data {
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
                enSavoirPlus {
                  text
                  image {
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
          }
        }
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
      header: data.home.data.attributes.header,
      nous: data.home.data.attributes.nous,
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
    },
  }
}
