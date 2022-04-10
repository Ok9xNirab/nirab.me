import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/home"

const IndexPage = ({ path }) => (
  <Layout path={path}>
    <Seo title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
