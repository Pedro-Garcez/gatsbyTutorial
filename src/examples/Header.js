import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
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
`

const Header = () => {
  const data = useStaticQuery(getData)
  console.log(data)
  return (
    <div>
      <h1>this is a heading</h1>
    </div>
  )
}

export default Header
