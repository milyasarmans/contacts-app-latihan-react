import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Toggler from './Toggler'

export default function Navigation() {
  const { pathname } = useLocation()
  return (
    <nav className="navigation">
      <ul>
        <li>
          {pathname !== '/archives'
            ? <Link to="/archives" title="Archives">Arsip</Link>
            : <Link to="/" title="Home">Home</Link>}

        </li>
        <li>
          <Toggler />
        </li>
      </ul>
    </nav>
  )
}
