import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import ActionPage from './ActionPage'

export default function ActionHome() {
  const navigate = useNavigate()

  return (
    <ActionPage page="homepage">
      <button
        className="action"
        type="button"
        title="Tambah"
        onClick={() => navigate('/notes/new')}
      >
        <HiPlus />
      </button>
    </ActionPage>
  )
}
