import { Helmet } from "react-helmet"
import DevisPage from "../../../src/pages/devis/index"
const Layout = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Layout Page</title>
        <link rel="canonical" href="http://mysite.com/Layout" />
        <meta
          name="description"
          content="This is a description of the about page"
        />
      </Helmet>
      <DevisPage />
    </div>
  )
}
export default Layout
