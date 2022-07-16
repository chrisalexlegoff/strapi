import Head from "next/head"
import React from "react"
import Nav from "./Nav"

const Layout = ({ children, logo, hamburger }) => {
  return (
    <>
      <Head>
        <title>Film Database</title>
      </Head>

      <Nav logo={logo} hamburger={hamburger} />
      <main>{children}</main>
    </>
  )
}

export default Layout
