import React from 'react'
import { HiDocumentAdd } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import useLanguage from '../hooks/useLanguage'
import ActionPage from './ActionPage'

export default function ActionHome() {
  const text = useLanguage('app')
  const navigate = useNavigate()

  return (
    <ActionPage page="homepage">
      <button
        className="action"
        type="button"
        title={text.add}
        onClick={() => navigate('/notes/new')}
      >
        <HiDocumentAdd />
      </button>
    </ActionPage>
  )
}
