import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { SocialMediaSection } from "./SocialMediaSection";

function FoodCategory() {
  const { category } = useParams();
  const [meals, setMeals] = useState<Meals[]>([]);

  useEffect(() => {

    const getCategory = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setMeals(response.data.meals);
      return response.data.meals;
    };

    getCategory();


  }, [category]);

  return (
    <>
      <div className="flex justify-center pb-5 pt-20 text-2xl font-bold bg-gray-100">
        {category}
      </div>
      <div className=" bg-gray-100 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg: gap-6 p-20">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl p-5 text-center"
          >
            <Link to={`${meal.idMeal}`}>
              <div className="text-1xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100 pb-5">
                {meal.strMeal}
              </div>

              <img
                className="w-full cursor-pointer"
                src={meal.strMealThumb}
                alt="meal-category"
              />
            </Link>
            <SocialMediaSection />
          </div>

        ))}
      </div>
    </>
  );
}

export default FoodCategory;
