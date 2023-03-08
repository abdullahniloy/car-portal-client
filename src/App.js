
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Pages/Router/Routes';


function App() {

  return (
    <div data-theme="synthwave" className='max-w-screen-xl mx-auto	'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
