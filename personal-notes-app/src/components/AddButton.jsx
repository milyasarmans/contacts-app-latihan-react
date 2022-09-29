import React from 'react'
import PropTypes from 'prop-types'
import { HiX, HiCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import ActionPage from './ActionPage'

function AddButton({ handleSave }) {
  const navigate = useNavigate()

  return (
    <ActionPage page="add-new-page">
      <>
        <button
          className="action"
          type="button"
          title="Tambah"
          onClick={() => navigate('/')}
        >
          <HiX />
        </button>
        <button
          className="action"
          type="button"
          title="Tambah"
          onClick={() => handleSave()}
        >
          <HiCheck />
        </button>
      </>
    </ActionPage>
  )
}

AddButton.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default AddButton
