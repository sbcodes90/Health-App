import axios from 'axios';

export async function getCategories() {
    const response =  await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      //console.log('response from getCategories service',response.data.categories);
      return response.data.categories;
     
}

export async function getRandomMeal() {
  const response = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  );
  //console.log('from function',response.data.meals);
  return response.data.meals;
}
