import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { FoodCategoriesList, foodCategoryListLoader } from './components/FoodCategoriesList';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Welcome />
      
    },
    {
      path: "/options",
      element: <FoodCategoriesList />,
      loader: foodCategoryListLoader
     
    }

    
  ],
)
function App() {
  
  return <RouterProvider router={router} />;

}

export default App;
