import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import IndexPage from '../pages'
import ArchivesPage from '../pages/archives'
import LoginPage from '../pages/login'
import New from '../pages/notes/New'
import Notes from '../pages/notes/Notes'
import RegisterPage from '../pages/register'
import RouteMiddleware from '../middleware/RouteMiddleware'
import NotFoundPage from '../pages/NotFoundPage'

const Routes = () => useRoutes([
  {
    path: '/',
    element: (
      <RouteMiddleware middleware="auth">
        <IndexPage />
      </RouteMiddleware>
    )
  },
  {
    path: '/login',
    element: (
      <RouteMiddleware middleware="public">
        <LoginPage />
      </RouteMiddleware>
    )
  },
  {
    path: '/register',
    element: (
      <RouteMiddleware middleware="public">
        <RegisterPage />
      </RouteMiddleware>
    )
  },
  {
    path: '/archives',
    element: (
      <RouteMiddleware middleware="auth">
        <ArchivesPage />
      </RouteMiddleware>
    )
  },
  {
    path: '/notes',
    element: (
      <RouteMiddleware middleware="auth">
        <Navigate to="/" replace />
      </RouteMiddleware>
    )
  },
  {
    path: '/notes/new',
    element: (
      <RouteMiddleware middleware="auth">
        <New />
      </RouteMiddleware>
    )
  },
  {
    path: '/notes/:id',
    element: (
      <RouteMiddleware middleware="auth">
        <Notes />
      </RouteMiddleware>
    )
  },
  {
    path: '/*',
    element: (
      <RouteMiddleware middleware="auth">
        <NotFoundPage />
      </RouteMiddleware>
    )
  }
])

export default Routes
