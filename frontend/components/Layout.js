import Head from "next/head"
import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children, titrePage, logo, hamburger, footer }) => {
  const titrePageEncours = `DualDclic | ${titrePage}`
  return (
    <>
      <Head>
        <title>{titrePageEncours}</title>
      </Head>

      <Nav logo={logo} hamburger={hamburger} />
      <main className="select-none">{children}</main>
      <Footer footer={footer} />
    </>
  )
}

export default Layout
