import React from 'react'
import { useLoaderData, LoaderFunction, Link } from "react-router-dom";
import { getCategories } from '../services/Categories';
import CategoryOption from './CategoryOption';
import Nav from './Nav';

export const FoodCategoriesList = () => {
    const data = useLoaderData() as Category[];

  return (
    <>
    <Nav />
    <div>FoodCategoriesList
    
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-5 gap-6">
     {data.map((item) => {
       return (
         <div key={item.idCategory}>
           <Link to={`option/${item.strCategory}`}>{item.strCategory}</Link>
           <img src={item.strCategoryThumb} alt="" />
         </div>
       )
    })}
     
    </div>

</div>
</>
  )
}

export const foodCategoryListLoader: LoaderFunction = async () => {
    const results = await getCategories();
    return results;
};