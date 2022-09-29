/* eslint-disable import/no-unresolved */
import React from 'react'
import {
  Link, Navigate, Route, Routes
} from 'react-router-dom'

import Index from './pages'
import NotFoundPage from './pages/NotFoundPage'
import ArchivesPage from './pages/archives'
import Notes from './pages/Notes'
import New from './pages/New'
import Navigation from './components/Navigation'
import NotesEdit from './pages/NotesEdit'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/notes" element={<Navigate to="/" replace />} />
          <Route path="/notes/new" element={<New />} />
          <Route path="/notes/:id" element={<Notes />} />
          <Route path="/notes/:id/edit" element={<NotesEdit />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
