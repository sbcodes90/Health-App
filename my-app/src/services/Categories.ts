import axios from 'axios';

export async function getCategories() {
    const response =  await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      return response.data.categories;
     
}

export async function getRandomMeal() {
  const response = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  );
  return response.data.meals;
}
