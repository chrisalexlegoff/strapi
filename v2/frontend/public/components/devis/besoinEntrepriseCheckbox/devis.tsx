import * as React from "react"
import { DevisBesoinEntrepriseCheckboxQuery } from "../../../generated/graphql"
interface Props {
  data: DevisBesoinEntrepriseCheckboxQuery
}
const className = "Devis"
const Devis: React.FC<Props> = ({ data }) => {
  const besoinEntrepriseCheckbox =
    data?.devi?.data?.attributes?.devis?.besoinEntrepriseCheckbox
  return (
    <div className={className}>
      <h3>Devis</h3>
      <ol className={`${className}__list`}>
        {!!besoinEntrepriseCheckbox &&
          besoinEntrepriseCheckbox.map(
            (item, index) => !!item && <li key={item.id}>{item.text}</li>
          )}
      </ol>
    </div>
  )
}
export default Devis
