import React, { useEffect, useState } from 'react'
import parser from 'html-react-parser'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'
import { showFormattedDate } from '../../utils'
import {
  archiveNote, deleteNote, getNote, unarchiveNote
} from '../../utils/network-data'
import PageButton from '../../components/PageButton'
import NotFoundMessage from '../../components/NotFoundMessage'
import Loading from '../../components/Loading'
import useLanguage from '../../hooks/useLanguage'

export default function Notes() {
  const [note, setNote] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const textApp = useLanguage('app')
  const textNote = useLanguage('notesId')

  const handleArchive = () => {
    if (confirm(textApp.msg.confirm)) {
      let methods = null
      let navigateTo = '/'
      if (note.archived) {
        methods = unarchiveNote(id)
        navigateTo = '/archives'
      } else {
        methods = archiveNote(id)
      }
      methods
        .then((res) => {
          if (!res.error) {
            navigate(navigateTo)
          }
        })
        .catch(() => {
          alert(textApp.msg.error)
        })
    }
  }

  const handleDelete = () => {
    if (confirm(textApp.msg.confirm)) {
      deleteNote(id).then((res) => {
        if (!res.error) {
          navigate('/')
        }
      })
        .catch(() => {
          alert(textApp.msg.error)
        })
    }
  }

  useEffect(() => {
    getNote(id)
      .then((res) => {
        if (!res.error) {
          setNote(res.data)
        } else {
          alert(textNote.notFound)
        }
        setLoading(false)
      })
      .catch(() => {
        alert(textApp.msg.error)
      })
  }, [])

  return (
    <section className="detail-page">
      { ('id' in note && !loading) ? (
        <>
          <Link
            to="/"
            title={textApp.back}
          >
            <MdArrowBackIos />
            {' '}
            { textApp.back }
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
          <PageButton
            archived={note.archived || false}
            handleArchive={handleArchive}
            handleDelete={handleDelete}
          />
        </>
      ) : ''}
      {(!('id' in note) && !loading) ? <NotFoundMessage /> : ''}
      {loading ? <Loading /> : ''}
    </section>
  )
}
