import { createBrowserRouter, RouterProvider} from 'reacr-router-dom';
import Home from './components/home';
import Error404 from './components/error404';
import './App.css';

const router = createBrowserRouter([
  { 
  path: '/', 
  element: <Home />,
  error: <Error404 /> 
}
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
