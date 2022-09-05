import { gql } from "@apollo/client"

export const QUERY_LAUNCH_DEVIS = gql`
  query DevisBesoinEntrepriseCheckbox {
    devi {
      data {
        attributes {
          devis {
            besoinEntrepriseCheckbox(pagination: { start: 0, limit: 30 }) {
              id
              checked
              placeholder
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
            }
          }
        }
      }
    }
  }
`
