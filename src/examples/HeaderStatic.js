import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data) => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default ComponentName
