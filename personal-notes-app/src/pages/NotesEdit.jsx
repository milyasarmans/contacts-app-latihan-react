import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ContentState, convertFromHTML, convertToRaw, EditorState
} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { HiArrowLeft } from 'react-icons/hi'
import draftToHtml from 'draftjs-to-html'
import { editNote, getNote } from '../utils/local-data'
import EditButton from '../components/EditButton'
import NotFound from '../components/NotFound'

export default function NotesEdit() {
  const [form, setForm] = useState({
    id: '',
    archived: false,
    title: '',
    body: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('<b><i><u>Isi Catatan</u></i></b>')
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
    const Note = getNote(id)
    if (Note) {
      const { title, archived, body } = Note
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
            <HiArrowLeft />
            {' '}
            Kembali
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
        <NotFound />
      )}

      <EditButton
        handleSave={handleSave}
      />
    </section>
  )
}
