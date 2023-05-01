import User from './components/User'
import Admin from './components/Admin';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {path:'/', element:<User></User>},
    {path: 'Admin', element:<Admin></Admin>},
    {path:'User', element: <User></User>}

  ])
  return (
    <div className="App">
      {/* 
       */}
      <RouterProvider router = {router}> </RouterProvider>
       
    </div>
  );
}

export default App;
