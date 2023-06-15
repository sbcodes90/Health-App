import React from 'react'
import { useLoaderData, LoaderFunction } from "react-router-dom";
import { getCategories } from '../services/Categories';
import CategoryOption from './CategoryOption';

export const FoodCategoriesList = () => {
    const data = useLoaderData() as Category[];

  return (
    <div>FoodCategoriesList
    
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-5 gap-6">
     {data.map((item) => {
     return <div key={item.idCategory}>{item.strCategory}
     <img src={item.strCategoryThumb} alt="" /></div>
    })}
     
    </div>



    {/* {data.map((item)=> {
        return (
            <div key={item.idCategory}>
                <CategoryOption description={item.strCategoryDescription} image={item.strCategoryThumb} title={item.strCategory} />
            </div>
        )
        
    })} */}

</div>
  )
}

export const foodCategoryListLoader: LoaderFunction = async () => {
    const results = await getCategories();
    return results;
};