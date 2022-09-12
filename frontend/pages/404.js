import Layout from "../components/Layout"
import client from "../lib/apollo-client"
import { gql } from "@apollo/client"
import React from "react"
import ErrorPage from "../components/error-page/error-page"

export default function Error404({
  titrePage,
  logo,
  hamburger,
  footer,
  errorPage,
  scrollTop,
}) {
  return (
    <Layout
      scrollTop={scrollTop}
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      titrePage={titrePage}
    >
      <ErrorPage errorPage={{ errorPage }} />
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query ErrorPage {
        scrollTop {
          data {
            attributes {
              bg {
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
        errorPage {
          data {
            attributes {
              titrePage
              button
              titre
              paragraphe
              bg {
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
      titrePage: data.errorPage.data.attributes.titrePage,
      errorPage: data.errorPage.data.attributes,
      scrollTop: data.scrollTop.data.attributes,
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
      footer: data.footer.data.attributes,
    },
  }
}
