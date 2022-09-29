import React, { useEffect, useState } from 'react'
import ActionHome from '../components/ActionHome'
import NoteListEmpty from '../components/NoteListEmpty'
import NotesList from '../components/NoteList'
import { getArchivedNotes } from '../utils/local-data'

export default function Index() {
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
          placeholder="Cari berdasarkan judul ..."
          value={search}
          onChange={handleSearch}
        />
      </section>
      {notes.length > 0 && <NotesList notes={notes} />}
      {notes.length === 0 && <NoteListEmpty />}
      <ActionHome />
    </section>
  )
}
