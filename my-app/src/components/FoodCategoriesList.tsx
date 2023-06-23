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
      <div className='bg-black w-full h-auto p-20'>
        <div className="p-20 bg-white h-auto pt-20 rounded">
          <div className='text-orange-500 font-bold text-center pb-10 text-2xl'>Food Categories</div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10 '>
            {data.map((item) => (
              <div key={item.idCategory} className="text-center p-10 border-4 rounded-xl border-black">
                <div><img src={item.strCategoryThumb} alt="cateogry-image" /></div>
                <br></br>
                <div className="font-bold">{item.strCategory}</div>
              </div>
            ))}
          </div>
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