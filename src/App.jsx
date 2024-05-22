import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CoreLayout from './CoreLayout';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Core from './Core';
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
          path: '/skills', // Absolute path
          element: <Skills />
        },
        {
          path: '/projects', // Absolute path
          element: <Projects />
        },
        {
          path: '/contact', // Absolute path
          element: <Contact />
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
