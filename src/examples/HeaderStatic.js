import React from "react"
import { StaticQuery, graphql } from "gatsby"
const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

const ComponentName = () => (
  <StaticQuery
    query={getData}
    render={(data) => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default ComponentName
