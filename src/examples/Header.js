import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)
  return <div>{data.site.siteMetadata.person.name}</div>
  return <div>{data.site.siteMetadata.person.age}</div>
}

export default Header
