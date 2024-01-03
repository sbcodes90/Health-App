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
        <div className="p-10">
        <header className="flex flex-row justify-center text-2xl font-bold mt-[100px] mb-[100px]">{item[0]?.strMeal}</header>
        <div className="flex flex-col lg:flex-row lg:justify-around gap-5">
            <img className="w-[100%]"src={item[0]?.strMealThumb}  alt={item[0]?.strMeal} />
            {VideoEmbedder(getParams())}
        </div>
        <div className="text-2xl font-bold flex justify-center mt-20">Directions</div>
        <div className="p-10">{item[0]?.strInstructions}</div>
        </div>
        </> 
     
    )
}

