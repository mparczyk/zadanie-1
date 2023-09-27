import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { paths } from './routes';

const browserRouter = createBrowserRouter(paths);

export const App = () => <RouterProvider router={browserRouter} />;