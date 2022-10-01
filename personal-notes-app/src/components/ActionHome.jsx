import React from 'react'
import { HiDocumentAdd } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import ActionPage from './ActionPage'

export default function ActionHome() {
  const navigate = useNavigate()

  return (
    <ActionPage page="homepage">
      <button
        className="action"
        type="button"
        title="Add"
        onClick={() => navigate('/notes/new')}
      >
        <HiDocumentAdd />
      </button>
    </ActionPage>
  )
}
