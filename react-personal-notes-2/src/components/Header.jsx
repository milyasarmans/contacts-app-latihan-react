import React from 'react'
import { Link } from 'react-router-dom'
import useLanguage from '../hooks/useLanguage'
import Navigation from './Navigation'

export default function Header() {
  const text = useLanguage('app')

  return (
    <header>
      <h1>
        <Link to="/">{text.title}</Link>
      </h1>
      <Navigation />
    </header>
  )
}
