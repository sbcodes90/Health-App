import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Welcome, randomMealGenerator } from './components/Welcome';
import { FoodCategoriesList, foodCategoryListLoader } from './components/FoodCategoriesList';
import FoodCategory from './components/FoodCategory';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Welcome />,
      loader: randomMealGenerator
      
    },
    {
      path: "/options",
      element: <FoodCategoriesList />,
      loader: foodCategoryListLoader
     
    },
    {
      path: "/options/option/:category",
      element: <FoodCategory />,
      loader: foodCategoryListLoader
     
    }

    
  ],
)
function App() {
  
  return <RouterProvider router={router} />;

}

export default App;
