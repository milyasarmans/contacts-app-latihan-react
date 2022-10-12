import React from 'react'
import useLanguage from '../hooks/useLanguage'

export default function Loading() {
  const text = useLanguage('app')

  return (
    <p className="loading-indicator">{ text.msg.loading }</p>
  )
}
