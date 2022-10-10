import React, { useEffect, useState } from 'react'
import ActionHome from '../components/ActionHome'
import NoteListEmpty from '../components/NoteListEmpty'
import NoteList from '../components/NoteList'
import { getArchivedNotes } from '../utils/local-data'

export default function IndexPage() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search !== '') {
      setNotes(
        getArchivedNotes()
          .filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
      )
    } else {
      setNotes(getArchivedNotes())
    }
  }, [search])
  return (
    <section className="homepage">
      <h2>Catatan Arsip</h2>
      <section className="search-bar">
        <input
          type="text"
          placeholder="Masukkan judul yang dicari..."
          value={search}
          onChange={handleSearch}
        />
      </section>
      {notes.length > 0 && <NoteList notes={notes} />}
      {notes.length === 0 && <NoteListEmpty />}
      <ActionHome />
    </section>
  )
}
