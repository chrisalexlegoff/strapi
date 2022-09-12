import Layout from "../components/Layout"
import client from "../lib/apollo-client"
import { gql } from "@apollo/client"
import React from "react"
import EntetePrestations from "./../components/prestation/entete-prestation"
import Expertise from "../components/prestation/expertise"
import Methodologie from "./../components/prestation/methodologie"

export default function Prestations({
  titrePage,
  logo,
  hamburger,
  footer,
  header,
  expertise,
  methodologie,
  scrollTop,
  mission,
}) {
  return (
    <Layout
      scrollTop={scrollTop}
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      titrePage={titrePage}
    >
      <EntetePrestations header={header} />
      <Expertise expertise={expertise} />
      <Methodologie methodologie={methodologie} mission={mission} />
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Prestations {
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
        prestation {
          data {
            attributes {
              titrePage
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
              expertise {
                button
                titre3bis
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
                  icons {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  titre
                  titreVerso
                  paragraphe
                }
                titre2bis
                titre3
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
              methodologie {
                titre2
                paragraphe
                paragrapheBis
                button
                images {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
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
                  titre
                  paragraphe
                  icons {
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
        home {
          data {
            attributes {
              mission {
                paragraphe
                titre2bis
                button
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
      methodologie: data.prestation.data.attributes.methodologie,
      mission: data.home.data.attributes.mission,
      titrePage: data.prestation.data.attributes.titrePage,
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
      scrollTop: data.scrollTop.data.attributes,
      footer: data.footer.data.attributes,
    },
  }
}
