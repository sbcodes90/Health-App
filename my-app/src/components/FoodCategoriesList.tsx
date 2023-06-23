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
      <div className='bg-black w-full h-[100vh] p-20'>
        <div className=' grid grid-row-1 justify-center p-20 bg-white h-[50vh] pt-20 rounded '>
          <div className='text-orange-500 font-bold'>Food Categories</div>
          
          {data.map((item) => (
            <div key={item.idCategory}>{item.strCategory}</div>
          ))}
          </div>
          
        </div>
      
      {/* <div className="flex justify-center p-20 text-orange-500 font-bold text-3xl bg-black">
        Food Categories List
      </div>
      <div className='bg-red p-20'>
      <div className="grid p-20 grid-cols-1 gap-20 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => {
          return (
            <div key={item.idCategory} className='justify-center'>
              <img src={item.strCategoryThumb} alt="food-category" className="mb-10 " />
              <Link to={`option/${item.strCategory}`} className='justify-center font-bold'>{item.strCategory}</Link>
            </div>
          )
        })}
      </div>
      {/* <div className="grid p-20 grid-cols-1 gap-20 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => {
          return (
            <div key={item.idCategory} className='justify-center'>
              <img src={item.strCategoryThumb} alt="food-category" className="mb-10 " />
              <Link to={`option/${item.strCategory}`} className='justify-center font-bold'>{item.strCategory}</Link>
            </div>
          )
        })}

      </div> 
      </div> */}
    </>
  )
}

export const foodCategoryListLoader: LoaderFunction = async () => {
  const results = await getCategories();
  return results;
};