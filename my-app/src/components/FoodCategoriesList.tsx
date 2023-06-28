import React from 'react'
import { useLoaderData, LoaderFunction, Link, useParams } from "react-router-dom";
import { getCategories } from '../services/Categories';
import Nav from './Nav';

export const FoodCategoriesList = () => {
  const data = useLoaderData() as Category[];

  const { category } = useParams();
  console.log('test', category)
  return (
    <>
      <Nav />
      <div className='w-full h-auto p-20 bg-black'>
      <div className='text-white font-bold text-center pb-10 text-2xl'>Food Categories</div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10'>
            {data.map((item) => (  
              <div key={item.idCategory} className="text-center p-10 rounded-xl  bg-gradient-to-r from-orange-500 to-orange-800 bg-opacity-10 border-slate-100 border-4 transition ease-in-out delay-150 bg-white-100 hover:-translate-y-1 hover:scale-110 hover:bg-white-100 duration-300 ...">
                <div><Link to={`${item.strCategory}`}><img src={item.strCategoryThumb} alt="category" /></Link></div>
                <br></br>
                <Link to={`${item.strCategory}`} className='justify-center font-bold'>{item.strCategory}</Link>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export const foodCategoryListLoader: LoaderFunction = async () => {
  const results = await getCategories();
  return results;
};