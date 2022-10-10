import React from 'react'
import {
  Link, Navigate, Route, Routes
} from 'react-router-dom'

import IndexPage from './pages'
import ArchivesPage from './pages/Archives'
import Notes from './pages/notes/Notes'
import NotesEdit from './pages/notes/NotesEdit'
import New from './pages/notes/New'
import NotFoundPage from './pages/NotFoundPage'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Notes App</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/notes" element={<Navigate to="/" replace />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/notes/:id" element={<Notes />} />
          <Route path="/notes/:id/edit" element={<NotesEdit />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/notes/new" element={<New />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
