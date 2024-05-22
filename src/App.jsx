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
          path: '/pages/skills',
          element: <Skills />
        },
        {
          path: '/pages/projects',
          element: <Projects />
        },
        {
          path: '/pages/contact',
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
