import AccueilEntete from "../components/accueil/accueil-entete"
import Layout from "./../components/Layout"
import client from "./../lib/apollo-client"
import { gql } from "@apollo/client"
import React from "react"
import Nous from "./../components/accueil/nous"
import Projet from "../components/accueil/projet"
import Pourquoi from "../components/accueil/pourquoi"
import Valeurs from "../components/accueil/valeurs"
import Realisations from "../components/accueil/realisations"
import Services from "../components/accueil/services"
import Mission from "../components/accueil/mission"

export default function Home({
  titrePage,
  header,
  nous,
  projet,
  pourquoi,
  valeurs,
  realisations,
  services,
  mission,
  logo,
  hamburger,
  footer,
}) {
  return (
    <Layout
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      titrePage={titrePage}
    >
      <AccueilEntete header={header} />
      <Nous nous={nous} />
      <Projet projet={projet} />
      <Pourquoi pourquoi={pourquoi} />
      <Valeurs valeurs={valeurs} />
      <Realisations realisations={realisations} />
      <Services services={services} />
      <Mission mission={mission} />
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
              titrePage
              mission {
                button
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
              realisations {
                titre2
                titre3
                paragraphe
                button
                paragrapheBis
                carousel {
                  item {
                    data {
                      id
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                }
              }
              valeurs {
                titre2
                paragraphe
                button
                titre2bis
                paragrapheBis
                titre4
                flipCard {
                  id
                  front
                  back
                  icons {
                    data {
                      id
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                }
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
              pourquoi {
                titre2
                paragraphe
                button
                titre2bis
                paragrapheBis
                button2
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
              projet {
                titre2
                paragraphe
              }
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
      header: data.home.data.attributes.header,
      titrePage: data.home.data.attributes.titrePage,
      nous: data.home.data.attributes.nous,
      projet: data.home.data.attributes.projet,
      pourquoi: data.home.data.attributes.pourquoi,
      valeurs: data.home.data.attributes.valeurs,
      realisations: data.home.data.attributes.realisations,
      services: data.home.data.attributes.services,
      mission: data.home.data.attributes.mission,
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
      footer: data.footer.data.attributes,
    },
  }
}
