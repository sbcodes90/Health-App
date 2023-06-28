import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const FoodItem = () => {

    const { name } = useParams();

    const [item, setItem] = useState<Meals[]>([]);

    //console.log('youtube link', item[0].strYoutube)

    useEffect(() => {
        const getFoodItem = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
            console.log(response.data.meals);
            setItem(response.data.meals);
            return response.data.meals;
        }

        getFoodItem()

    }, [name])

    const youtubeID: string = `xvPR2Tfw5k0`

    return (
        <div>FoodItem
            <h1>{name}</h1>
            {item.map((fact)=> {
                return <div key={fact.idMeal}>
                    
<iframe className='video'
        title='Youtube player'
        
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
</iframe>
                </div>
            })}
        </div>
    )
}

