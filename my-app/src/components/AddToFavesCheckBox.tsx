import React, { useState } from 'react'
// <input value={meal.strMeal} type="checkbox" /></div> */ 
/* 
const handleChange = (e) => {
    const value = e.target.value;
    setItems((prev) =>
    items.includes(value)
    ? prev.filter((cur) => cur !== value) 
    : [...prev, e.target.value]
    );
  }; */
function AddToFavesCheckBox({meal}: {meal: string}) {

    const [faves, setFaves] = useState <Array<string>>([]);

    const handleChange = (e: any) => {
        const value = e.target.value;
        setFaves((prev ) =>
        faves.includes(value) ? prev.filter((item) => item !== value) : [...prev, e.target.value]
        )
       
    }
    return (
        <div> 
            <div className="flex items-center">
            <input id="link-checkbox" type="checkbox" value={meal} onClick={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add to faves </label>
            </div>
        </div>
  )
}

export default AddToFavesCheckBox