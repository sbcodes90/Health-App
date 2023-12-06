import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider , Routes} from 'react-router-dom';
import { Welcome, randomMealGenerator } from './components/Welcome';
import { FoodCategoriesList, foodCategoryListLoader } from './components/FoodCategoriesList';
import FoodCategory from './components/FoodCategory';
import { HomePageLayout } from './components/HomePageLayout';
import { FoodItem } from './components/FoodItem';

/* const router = createBrowserRouter(
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
) */


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<Welcome />} loader={randomMealGenerator} />
  </Route>
  <Route>
      <Route path="categories" element={<FoodCategoriesList />} loader={foodCategoryListLoader} />
      <Route path="categories/:category" element={<FoodCategory />} loader={foodCategoryListLoader} />
      <Route path="categories/:category/:name" element={<FoodItem />} />
      </Route>
    </>

  )
)

function App() {
  
  return <RouterProvider router={router} />;

}

export default App;
