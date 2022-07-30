import Layout from "../components/Layout"
import client from "../lib/apollo-client"
import { gql } from "@apollo/client"
import React from "react"
import EntetePrestations from "./../components/prestation/entete-prestation"
import Expertise from "../components/prestation/expertise"

export default function Prestations({
  titrePage,
  logo,
  hamburger,
  footer,
  header,
  expertise,
}) {
  return (
    <Layout
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      titrePage={titrePage}
    >
      <EntetePrestations header={header} />
      <Expertise expertise={expertise} />
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Prestations {
        prestation {
          data {
            attributes {
              titrePage
              expertise {
                titre2
                paragraphe
                board {
                  id
                  bg {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  titre
                }
              }
              header {
                titrePage
                imageDeco {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
                bg {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
                paragraphe
                enSavoirPlus {
                  text
                  image {
                    data {
                      attributes {
                        width
                        height
                        url
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
        footer {
          data {
            attributes {
              logo {
                data {
                  attributes {
                    width
                    height
                    url
                  }
                }
              }
              paragraphe
              titre4
              button
              titre4bis
              nav {
                id
                slug
                lien
              }
              titre4tierce
              reseaux {
                id
                icon {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
                iconHover {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
                lien
                slug
              }
              titre4quarto
              copyright
              contact {
                mail
                lien
                tel
                horaires
              }
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      header: data.prestation.data.attributes.header,
      expertise: data.prestation.data.attributes.expertise,
      titrePage: data.prestation.data.attributes.titrePage,
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
      footer: data.footer.data.attributes,
    },
  }
}
