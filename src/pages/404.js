import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <Layout>
      <section className="notfound">
        <div className="notfound__cont">
          <h4 className="notfound__header">
            Sorry this page does not exist
            <span role="img" aria-label="a sad face emoji">
              &#128542;
            </span>
          </h4>
          <Link className="notfound__link" to="/">
            go to homepage
          </Link>
        </div>
      </section>
    </Layout>
  )
}
