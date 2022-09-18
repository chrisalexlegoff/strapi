import React from "react"
import Layout from "../components/Layout"
import client from "../lib/apollo-client"
import { gql } from "@apollo/client"
import EnteteContact from "./../components/contact/entete-contact"
import ContactForm from "./../components/contact/contact-form"
import Informations from "../components/contact/informations"

export default function Contact({
  titrePage,
  logo,
  hamburger,
  footer,
  header,
  contact,
  informations,
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
      <div id="contact">
        <EnteteContact header={header} />
        <ContactForm contact={contact} />
        <Informations informations={informations} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Contact {
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
        contact {
          data {
            attributes {
              informations {
                titre
                iconAdresse {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
                iconTelephone {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
                iconMail {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
                adresse
                telephone
                mail
              }
              contact {
                titre
                button
                personne {
                  inputNom
                  inputMail
                  inputMessage
                  errorMessageInputNom
                  errorMessageInputMail
                  errorMessageInputMailRegex
                  errorMessageInputMessage
                  placeholderNom
                  placeholderMail
                  placeholderMessage
                }
                checkTerms {
                  text
                  checked
                  errorMessage
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
                successMessage
                imageDeco {
                  data {
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
              }
              titrePage
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
                paragraphe
                button
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
      header: data.contact.data.attributes.header,
      titrePage: data.contact.data.attributes.titrePage,
      contact: data.contact.data.attributes.contact,
      informations: data.contact.data.attributes.informations,
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
      footer: data.footer.data.attributes,
      scrollTop: data.scrollTop.data.attributes,
    },
  }
}
