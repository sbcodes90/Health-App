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

 
      <div className='w-full h-auto p-20 bg-gradient-to-b from-orange-200 to-orange-400'>
      <div className='text-black font-bold text-center pb-10 text-2xl'>Food Categories</div>
      
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10'>
            {data.map((item) => (
              <div key={item.idCategory} className="text-center p-10 rounded-xl bg-gray-50 bg-opacity-50 border-slate-100 border-4 transition ease-in-out delay-150 bg-white-100 hover:-translate-y-1 hover:scale-110 hover:bg-white-100 duration-300 ...">
                <div><img src={item.strCategoryThumb} alt="cateogry-image" /></div>
                <br></br>
                <div className="font-bold">{item.strCategory}</div>
              </div>
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