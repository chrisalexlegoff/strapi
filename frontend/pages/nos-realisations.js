import Layout from "../components/Layout"
import client from "../lib/apollo-client"
import { gql } from "@apollo/client"
import React from "react"
import EnteteRealisations from "./../components/realisations/entete-realisations"
import RealisationsTab from "../components/realisations/realisations"
import Mission from "./../components/realisations/mission"

export default function Realisations({
  titrePage,
  logo,
  hamburger,
  footer,
  header,
  realisations,
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
      <div id="realisation">
        <EnteteRealisations header={header} />
        <RealisationsTab realisations={realisations} />
        <Mission mission={mission} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Realisations {
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
        realisation {
          data {
            attributes {
              realisations {
                id
                titre
                annee
                paragraphe
                button
                outils {
                  id
                  competence
                }
                carousel {
                  item {
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
                button
                titre2
                titre3
                titre3bis
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
                titre2bis
                services {
                  id
                  icons {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  legend
                  paragraphe
                }
              }
              services {
                titre2
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
                services {
                  id
                  icons {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  legend
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
      header: data.realisation.data.attributes.header,
      realisations: data.realisation.data.attributes.realisations,
      titrePage: data.realisation.data.attributes.titrePage,
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
      footer: data.footer.data.attributes,
      scrollTop: data.scrollTop.data.attributes,
      mission: data.home.data.attributes.mission,
    },
  }
}
