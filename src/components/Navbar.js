import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/blog/">blog</Link>
        </li>
        <li>
          <Link to="/products/">prods</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
