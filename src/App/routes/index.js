import { Home } from '../../paths/Home';
import { FactDetails, factsIdLoader } from '../../paths/FactDetails';
import { AnimalFacts } from '../../paths/AnimalFacts';
import { ErrorPage } from '../../paths/ErrorPage';

export const paths = [
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