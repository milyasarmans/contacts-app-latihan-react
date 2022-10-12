import React, { useEffect, useState } from 'react'
import ActionHome from '../components/ActionHome'
import NoteListEmpty from '../components/NoteListEmpty'
import NoteList from '../components/NoteList'
import Loading from '../components/Loading'
import useInput from '../hooks/useInput'
import useLanguage from '../hooks/useLanguage'
import { getActiveNotes } from '../utils/network-data'

export default function IndexPage() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useInput('')
  const [dataNotes, setDataNotes] = useState([]) // all notes from api
  const [initNotes, setInitNotes] = useState(false) // flag sudah ambil notes dari api
  const [loading, setLoading] = useState(true)
  const text = useLanguage('app')
  const textNote = useLanguage('note')

  const initNotesFromApi = () => {
    getActiveNotes()
      .then((res) => {
        if (!res.error) {
          setDataNotes(res.data)
          setNotes(res.data)
          setInitNotes(true)
          setLoading(false)
        }
      })
      .catch(() => {
        alert(text.msg.error)
      })
  }

  useEffect(() => {
    if (!initNotes) {
      initNotesFromApi()
    }
    if (initNotes) {
      let tempDataNotes = [...dataNotes]
      if (search !== '') {
        // eslint-disable-next-line max-len
        tempDataNotes = tempDataNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
      }
      setNotes(tempDataNotes)
    }
  }, [search])
  return (
    <section className="homepage">
      <h2>{ textNote.header }</h2>
      <section className="search-bar">
        <input
          type="text"
          placeholder={textNote.searchPlaceholder}
          value={search}
          onChange={setSearch}
        />
      </section>
      {(notes.length > 0 && !loading) ? <NoteList notes={notes} /> : ''}
      {(notes.length === 0 && !loading) ? <NoteListEmpty /> : ''}
      {loading ? <Loading /> : ''}
      <ActionHome />
    </section>
  )
}
