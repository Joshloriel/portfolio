import { useState } from 'react'
import Core from './Core'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CoreLayout from './CoreLayout'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CoreLayout />,
      children: [
        {
          path: '/',
          element: <Core />

        },
        {
          path: 'skills',
          element: <Skills />
        },
        {
          path: 'projects',
          element: <Projects />
        },
        {
          path: 'contact',
          element: <Contact />
        },
      ]
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
