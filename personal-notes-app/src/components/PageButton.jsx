import React from 'react'
import PropTypes from 'prop-types'
import { HiOutlineTrash } from 'react-icons/hi'
import { BiEdit, BiArchiveIn, BiArchiveOut } from 'react-icons/bi'
import ActionPage from './ActionPage'

function PageButton({
  archived, handleEdit, handleArchive, handleDelete
}) {
  return (
    <ActionPage page="detail-page">
      <>
        <button
          className="action"
          type="button"
          title="Edit"
          onClick={() => handleEdit()}
        >
          <BiEdit />
        </button>
        <button
          className="action"
          type="button"
          title={archived ? 'Aktifkan' : 'Arsipkan'}
          onClick={() => handleArchive()}
        >
          {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </button>
        <button
          className="action"
          type="button"
          title="Delete"
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
  handleEdit: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default PageButton
