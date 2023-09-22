import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Components/Home';
import { FactDetails } from './Components/FactDetails';
import { AnimalFacts } from './Components/AnimalFacts';

const paths = [
  {
    path: '/',
    element: <Home />,
    children: [
      { 
        index: true,
        element: <AnimalFacts />
      },
      {
        path: '/details/:factId',
        element: <FactDetails />,
        },
      {
        path: '/facts',
        element: <AnimalFacts />
      },
    ]
  },
  {
    path: '*',
    element: <>404</>,
  },
];

const browserRouter = createBrowserRouter(paths);

export default function App() {
  return <RouterProvider router={browserRouter} />;
}