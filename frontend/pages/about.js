import Layout from "./../components/Layout"
import client from "./../lib/apollo-client"
import { gql } from "@apollo/client"
import React from "react"
import AccueilAbout from "./../components/a-propos/accueil-a-propos"
import Binome from "../components/a-propos/binome"
import IntroPresentation from "./../components/a-propos/introPresentation"
import Presentation from "../components/a-propos/presentation"
import Mission from "../components/a-propos/mission"

export default function About({
  titrePage,
  logo,
  hamburger,
  footer,
  header,
  binome,
  introPresentation,
  presentation,
  mission,
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
      <div id="a-propos">
        <AccueilAbout header={header} />
        <Binome binome={binome} />
        <IntroPresentation introPresentation={introPresentation} />
        <Presentation presentation={presentation} />
        <Mission mission={mission} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query About {
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
        about {
          data {
            attributes {
              titrePage
              presentation {
                titre2
                titre2bis
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
                button
                paragrapheBis
                titre4
                titre4bis
                competencesChris {
                  id
                  competence
                }
                competencesSab {
                  id
                  competence
                }
              }
              introPresentation {
                titre3
                paragraphe
                titre4
                titre4bis
                titre5
              }
              binome {
                button
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
        home {
          data {
            attributes {
              mission {
                button
                titre2
                titre3
                titre3bis
                titre4
                paragraphe
                paragrapheBis
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
      header: data.about.data.attributes.header,
      binome: data.about.data.attributes.binome,
      introPresentation: data.about.data.attributes.introPresentation,
      presentation: data.about.data.attributes.presentation,
      mission: data.home.data.attributes.mission,
      titrePage: data.about.data.attributes.titrePage,
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
      footer: data.footer.data.attributes,
      scrollTop: data.scrollTop.data.attributes,
    },
  }
}
