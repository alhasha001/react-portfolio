import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Experience from "../components/Experience"

const IndexPage = () => (
  <Layout>
    <SEO title="Ammar's CV" />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Experience />
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
