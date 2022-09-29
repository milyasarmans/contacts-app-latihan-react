import React from 'react'
import PropTypes from 'prop-types'
import { HiCheck } from 'react-icons/hi'
import ActionPage from './ActionPage'

function EditButton({ handleSave }) {
  return (
    <ActionPage page="detail-page">
      <button
        className="action"
        type="button"
        title="Simpan"
        onClick={() => handleSave()}
      >
        <HiCheck />
      </button>
    </ActionPage>
  )
}

EditButton.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default EditButton
