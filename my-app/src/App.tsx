import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { FoodCategoriesList } from './components/FoodCategoriesList';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Welcome />
      
    },
    {
      path: "/options",
      element: <FoodCategoriesList />,
     
    }

    
  ],
)
function App() {
  
  return <RouterProvider router={router} />;

}

export default App;
