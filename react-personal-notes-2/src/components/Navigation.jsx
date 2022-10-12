/* eslint-disable no-undef */
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Toggler from './Toggler'
import AuthContext from '../contexts/AuthContext'
import useLanguage from '../hooks/useLanguage'
import LanguageToggler from './LanguageToggler'
import LogoutButton from './LogoutButton'

export default function Navigation() {
  const { auth } = useContext(AuthContext)
  const { pathname } = useLocation()
  const text = useLanguage('app')
  return (
    <>
      {
        auth ? (
          <nav className="navigation">
            <ul>
              <li>
                {
                  pathname !== '/archives' ? (
                    <Link
                      to="/archives"
                      title={text.nav.archives}
                    >
                      {text.nav.archives}
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      title={text.nav.archives}
                    >
                      {text.nav.home}
                    </Link>
                  )
                }
              </li>
            </ul>
          </nav>
        ) : ''
      }
      <LanguageToggler />
      <Toggler />
      <LogoutButton />
    </>
  )
}
