import Head from "next/head"
import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children, titrePage, logo, hamburger, footer }) => {
  console.log(children)
  return (
    <>
      <Head>
        <title>Dualdclic | {titrePage}</title>
      </Head>

      <Nav logo={logo} hamburger={hamburger} />
      <main className="select-none">{children}</main>
      <Footer footer={footer} />
    </>
  )
}

export default Layout
