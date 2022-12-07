

import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import routes from './Router/Routes';
function App() {
  return (
    <div className="App">
       <RouterProvider router={routes}></RouterProvider>
       <Toaster/>
    </div>
  );
}

export default App;
