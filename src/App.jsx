import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home, Skills, Projects, Contact } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
