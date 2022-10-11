import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ContentState, convertFromHTML, convertToRaw, EditorState
} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { MdArrowBackIos } from 'react-icons/md'
import draftToHtml from 'draftjs-to-html'
import { editNote, getNote } from '../../utils/local-data'
import EditButton from '../../components/EditButton'
import NotFoundMessage from '../../components/NotFoundMessage'

export default function NotesEdit() {
  const [form, setForm] = useState({
    id: '',
    archived: false,
    title: '',
    body: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('Ketikkan sesuatu...')
      )
    )
  })
  const { id } = useParams()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm((data) => ({ ...data, title: e.target.value }))
  }

  const onEditorStateChange = (body) => {
    setForm((data) => ({ ...data, body }))
  }

  const handleSave = () => {
    const { title } = form
    const body = draftToHtml(convertToRaw(form.body.getCurrentContent()))
    editNote({ id, title, body })
    navigate(`/notes/${id}`)
  }

  useEffect(() => {
    const showNote = getNote(id)
    if (showNote) {
      const { title, archived, body } = showNote
      setForm({
        id,
        title,
        archived,
        body: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(body)
          )
        )
      })
    }
  }, [])

  return (
    <section className="edit-page">
      { form.id !== '' ? (
        <>
          <Link
            to="/"
            title="Kembali"
          >
            <MdArrowBackIos />
            {' '}
            Back
          </Link>
          <div className="edit-page__input">
            <input
              className="edit-page__input__title"
              placeholder="Judul"
              value={form.title}
              onChange={handleChange}
            />
            <Editor
              editorState={form.body}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
          </div>
        </>
      ) : (
        <NotFoundMessage />
      )}

      <EditButton
        handleSave={handleSave}
      />
    </section>
  )
}
