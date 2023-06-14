import React from 'react'
import { useLoaderData, LoaderFunction } from "react-router-dom";
import { getCategories } from '../services/Categories';
import CategoryOption from './CategoryOption';

export const FoodCategoriesList = () => {
    const data = useLoaderData() as Category[];

  return (
    <div>FoodCategoriesList
    
    {data.map((item)=> {
        return (
            <div key={item.idCategory}>
                <CategoryOption description={item.strCategoryDescription} image={item.strCategoryThumb} title={item.strCategory} />
            </div>
        )
        
    })}

</div>
  )
}

export const foodCategoryListLoader: LoaderFunction = async () => {
    const results = await getCategories();
    return results;
};