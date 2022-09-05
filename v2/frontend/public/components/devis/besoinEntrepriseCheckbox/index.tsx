import { useDevisBesoinEntrepriseCheckboxQuery } from "../../../generated/graphql"
import Devis from "./devis"

const LaunchDevisContainer = () => {
  const { data, error, loading } = useDevisBesoinEntrepriseCheckboxQuery()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>ERROR</div>
  }

  return <Devis data={data} />
}

export default LaunchDevisContainer
