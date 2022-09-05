import React from "react"
import Layout from "../components/Layout"
import client from "../lib/apollo-client"
import { gql } from "@apollo/client"
import EnteteDevis from "./../components/demander-un-devis/entete-devis"
import Preambule from "../components/demander-un-devis/preambule"
import Questionnaire from "./../components/demander-un-devis/questionnaire"

const demanderUnDevis = ({
  logo,
  hamburger,
  footer,
  titrePage,
  header,
  preambule,
  devis,
}) => {
  return (
    <Layout
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      titrePage={titrePage}
    >
      <EnteteDevis header={header} />
      <Preambule preambule={preambule} />
      <Questionnaire devis={devis} />
    </Layout>
  )
}

export default demanderUnDevis

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Devis {
        devi {
          data {
            attributes {
              titrePage
              devis {
                titre
                button1
                button2
                button3
                button4
                message {
                  successMessage
                }
                nomEntreprise {
                  titre
                  legend
                  question
                  input
                  placeholder
                  errorMessage
                }
                activiteEntreprise {
                  titre
                  legend
                  question
                  input
                  placeholder
                  errorMessage
                }
                besoinEntreprise {
                  input
                  titre
                  question
                  legend
                  errorMessage
                }
                besoinsUn {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsDeux {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsTrois {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsQuatre {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsCinq {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsSix {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsSept {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsHuit {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsNeuf {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsDix {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsOnze {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsDouze {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsTreize {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsQuatorze {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsQuinze {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsSeize {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsDixSept {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsDixHuit {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsDixNeuf {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinsVingt {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinTextUn {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                besoinTextDeux {
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  input
                  text
                  checked
                  placeholder
                }
                fonctionnalitesEntreprise {
                  titre
                  legend
                  question
                  input
                  placeholder
                  errorMessage
                }
                pourquoiProjetEntreprise {
                  titre
                  legend
                  question
                  input
                  placeholder
                  errorMessage
                }
                contraintesEntreprise {
                  titre
                  legend
                  question
                  input
                  placeholder
                  errorMessage
                }
                budgetEntreprise {
                  titre
                  minValue
                  maxValue
                  question
                  questionDeux
                  errorMessage
                  legend
                  iconRange {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                }
                commentaireEntreprise {
                  titre
                  legend
                  question
                  input
                  placeholder
                  errorMessage
                }
                uploadFilesEntreprise {
                  messageErrorLenghtFile
                  titre
                  question
                  legend
                  fileUnName
                  fileDeuxName
                  fileTroisName
                  iconTrash {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  iconNuage {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  iconError {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  iconFichier {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  telecharger
                  errorLenghtFile
                }
                personneEntreprise {
                  errorMessage
                  errorMessageInputNom
                  errorMessageInputPrenom
                  errorMessageInputMail
                  errorMessageInputMailRegex
                  textUn
                  textDeux
                  textUnChecked
                  textDeuxChecked
                  titre
                  inputNom
                  inputPrenom
                  inputMail
                  placeholderNom
                  placeholderMail
                  placeholderPrenom
                  icon {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                }
                checkTermsEntreprise {
                  errorMessage
                  text
                  checked
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
              preambule {
                titre2
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
              }
              header {
                titrePage
                button
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
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
      footer: data.footer.data.attributes,
      titrePage: data.devi.data.attributes.titrePage,
      header: data.devi.data.attributes.header,
      preambule: data.devi.data.attributes.preambule,
      devis: data.devi.data.attributes.devis,
    },
  }
}
