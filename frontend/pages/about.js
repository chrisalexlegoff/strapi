import Layout from "./../components/Layout"
import client from "./../lib/apollo-client"
import { gql } from "@apollo/client"
import React from "react"
import AccueilAbout from "./../components/a-propos/accueil-a-propos"
import Binome from "../components/a-propos/binome"

export default function About({
  titrePage,
  logo,
  hamburger,
  footer,
  header,
  binome,
}) {
  return (
    <Layout
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      titrePage={titrePage}
    >
      <AccueilAbout header={header} />
      <Binome binome={binome} />
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query About {
        about {
          data {
            attributes {
              titrePage
              binome {
                titre3
                paragraphe
                paragrapheBis
                titre4
                images {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
              }
              header {
                bg {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
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
                imageDeco {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
                titre
                titrePage
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
      header: data.about.data.attributes.header,
      binome: data.about.data.attributes.binome,
      titrePage: data.about.data.attributes.titrePage,
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
      footer: data.footer.data.attributes,
    },
  }
}
