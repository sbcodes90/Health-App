import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VideoEmbedder from '../utils/VideoEmbedder';

export const FoodItem = () => {

    const { id } = useParams();

    const [item, setItem] = useState<Meals[]>([]);

useEffect(() => {

    async function getMealById() {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      
        );
        setItem(response.data.meals)
        return response.data.meals;
      }
      getMealById()

}, [id])

   const getParams = () => {
        const itemUrl = item[0]?.strYoutube;
        const id = itemUrl?.toString();
        return id?.slice(32)
     
}

getParams();

    return (
         <>
        <div className="p-10 bg-black h-full">
        <header className="text-center text-2xl font-bold mt-[75px] mb-[100px] text-white">{item[0]?.strMeal}</header>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
            <img className="w-full h-full rounded-2xl"src={item[0]?.strMealThumb}  alt={item[0]?.strMeal} />
             {VideoEmbedder(getParams())}
        </div>
        <div className="text-2xl font-bold flex justify-center text-white mb-10 pt-20">The Recipe</div>
        <div className="h-[25vh] px-[50px] py-[50px] lg:mx-[100px] overflow-scroll text-white font-semibold rounded-xl bg-gray-800 opacity-100">{item[0]?.strInstructions}</div> 
        </div>
        </> 
     
    )
}

