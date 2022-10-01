import React, { useEffect, useState } from 'react'
import { capitalizeFirstLetter } from '../utils'

function Toggler() {
  const [theme, setTheme] = useState('dark')

  const swipe = (val) => {
    setTheme(val)
    const root = window.document.documentElement
    root.setAttribute('data-theme', val)
    localStorage.setItem('theme', val)
  }

  useEffect(() => {
    if (localStorage.theme) {
      swipe(localStorage.theme)
    } else {
      localStorage.setItem('theme', 'dark')
      swipe('dark')
    }
  }, [])

  return (
    <button
      type="button"
      onClick={() => swipe(theme === 'dark' ? 'light' : 'dark')}
    >
      {capitalizeFirstLetter(theme)}
    </button>
  )
}

export default Toggler
