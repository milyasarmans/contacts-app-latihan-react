import React from 'react'
import PropTypes from 'prop-types'
import { HiX, HiCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import ActionPage from './ActionPage'
import useLanguage from '../hooks/useLanguage'

function AddButton({ handleSave }) {
  const text = useLanguage('app')
  const navigate = useNavigate()

  return (
    <ActionPage page="add-new-page">
      <>
        <button
          className="action"
          type="button"
          title={text.cancel}
          onClick={() => navigate('/')}
        >
          <HiX />
        </button>
        <button
          className="action"
          type="button"
          title={text.add}
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
