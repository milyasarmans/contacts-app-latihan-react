import React from 'react'
import PropTypes from 'prop-types'
import { HiOutlineTrash } from 'react-icons/hi'
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi'
import ActionPage from './ActionPage'
import useLanguage from '../hooks/useLanguage'

function PageButton({
  archived, handleArchive, handleDelete
}) {
  const text = useLanguage('app')
  return (
    <ActionPage page="detail-page">
      <>
        <button
          className="action"
          type="button"
          title={archived ? text.active : text.archive}
          onClick={() => handleArchive()}
        >
          {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </button>
        <button
          className="action"
          type="button"
          title={text.delete}
          onClick={() => handleDelete()}
        >
          <HiOutlineTrash />
        </button>
      </>
    </ActionPage>
  )
}

PageButton.propTypes = {
  archived: PropTypes.bool.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default PageButton
