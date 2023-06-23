import React, { useEffect, useState } from 'react'
import { useParams, LoaderFunction } from 'react-router-dom'
import axios from 'axios';
import Nav from './Nav';

function FoodCategory() {
    const { category } = useParams();
    console.log(category)
    const [meals, setMeals] = useState<Meals[]>([])
    console.log('my meals', meals)
    const getCategory = async () => {
        const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        console.log(response.data.meals);
        setMeals(response.data.meals)
        return response.data.meals;
    }


    const socialMediaSection = () => {

        const randomLikes = Math.floor(Math.random() * 1000);
        const randomComments = Math.floor(Math.random() * 100);

        return (
            <div className="flex space-x-2 justify-center pt-5">
                <div className="flex space-x-1 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </span>
                    <span>{randomComments}</span>
                </div>
                <div className="flex space-x-1 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span>{randomLikes}</span>
                </div>
            </div>
        )
    }

    useEffect(() => {
        getCategory();

        return () => {

        }
    }, [])

    return (
        <>
            <Nav />
            <div className="flex justify-center pb-5 pt-20 text-2xl font-bold bg-gray-100">{category}</div>
            <div className=" bg-gray-100 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg: gap-6 p-20">

                {meals.map((meal) => (
                    // <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-5 gap-6">
                    <div key={meal.idMeal} className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl p-5 text-center">
            
                            <div className="text-1xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100 pb-5">{meal.strMeal}</div>

                        <img className="w-full cursor-pointer" src={meal.strMealThumb} alt="" />

                        {socialMediaSection()}
                    </div>


                ))

                }
            </div>
        </>
    )
}

export default FoodCategory

