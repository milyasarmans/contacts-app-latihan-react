import React, { useEffect, useState } from 'react'
import ActionHome from '../components/ActionHome'
import NoteListEmpty from '../components/NoteListEmpty'
import NoteList from '../components/NoteList'
import Loading from '../components/Loading'
import useInput from '../hooks/useInput'
import useLanguage from '../hooks/useLanguage'
import { getArchivedNotes } from '../utils/network-data'

export default function IndexPage() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useInput('')
  const [dataNotes, setDataNotes] = useState([])
  const [initNotes, setInitNotes] = useState(false)
  const [loading, setLoading] = useState(true)
  const textApp = useLanguage('app')
  const text = useLanguage('archive')
  const textNote = useLanguage('note')

  const initNotesFromApi = () => {
    getArchivedNotes()
      .then((res) => {
        if (!res.error) {
          setDataNotes(res.data)
          setNotes(res.data)
          setInitNotes(true)
          setLoading(false)
        }
      })
      .catch(() => {
        alert(textApp.msg.error)
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
      <h2>{ text.header }</h2>
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
