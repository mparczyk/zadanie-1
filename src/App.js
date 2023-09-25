import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Components/Home';
import { FactDetails, factsIdLoader } from './Components/FactDetails';
import { AnimalFacts } from './Components/AnimalFacts';
import { ErrorPage } from './Components/ErrorPage';

const paths = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { 
            index: true,
            element: <AnimalFacts />
          },
          {
            path: '/details/:factId',
            element: <FactDetails />,
            loader: factsIdLoader,
    
          },
          {
            path: '/facts',
            element: <AnimalFacts />
          },
        ]
      }  
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