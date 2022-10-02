import React, { useEffect, useState } from 'react'
import parser from 'html-react-parser'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'
import { showFormattedDate } from '../../utils'
import {
  archiveNote, deleteNote, getNote, unarchiveNote
} from '../../utils/local-data'
import PageButton from '../../components/PageButton'
import NotFoundMessage from '../../components/NotFoundMessage'

export default function Notes() {
  const [note, setNote] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/notes/${id}/edit`)
  }

  const handleArchive = () => {
    if (note.archived) {
      unarchiveNote(id)
      navigate('/archives')
    } else {
      archiveNote(id)
      navigate('/')
    }
  }

  const handleDelete = () => {
    deleteNote(id)
    navigate('/')
  }

  useEffect(() => {
    const Note = getNote(id)
    if (Note) {
      setNote(Note)
    }
  }, [])

  return (
    <section className="detail-page">
      { 'id' in note ? (
        <>
          <Link
            to="/"
            title="Back"
          >
            <MdArrowBackIos />
            {' '}
            Back
          </Link>
          <h3 className="detail-page__title">
            { note.title }
          </h3>
          <p className="detail-page__createdAt">
            {showFormattedDate(note.createdAt)}
          </p>
          <div className="detail-page__body">
            { parser(note.body) }
          </div>
        </>
      ) : (
        <NotFoundMessage />
      )}
      <PageButton
        archived={note.archived || false}
        handleEdit={handleEdit}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </section>
  )
}
