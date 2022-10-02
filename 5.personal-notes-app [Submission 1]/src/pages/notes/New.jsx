import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Editor } from 'react-draft-wysiwyg'
import {
  ContentState, convertFromHTML, EditorState, convertToRaw
} from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import AddButton from '../../components/AddButton'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { addNote } from '../../utils/local-data'

export default function New() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    body: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('Ketikkan sesuatu...')
      )
    )
  })

  const handleChange = (e) => {
    setForm((data) => ({ ...data, title: e.target.value }))
  }

  const onEditorStateChange = (body) => {
    setForm((data) => ({ ...data, body }))
  }

  const handleSave = () => {
    const { title } = form
    const body = draftToHtml(convertToRaw(form.body.getCurrentContent()))
    addNote({ title, body })
    navigate('/')
  }

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
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
      <AddButton
        handleSave={handleSave}
      />
    </section>

  )
}
