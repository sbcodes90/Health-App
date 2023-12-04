import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VideoEmbedder from '../utils/VideoEmbedder';

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
   // "https://www.youtube.com/watch?v=SC17Mc70Db0"


   const getParams = () => {
        const itemUrl = item[0]?.strYoutube;
        const id = itemUrl?.toString();
        return id?.slice(32)
     
}

getParams();

    return (
        
        <div className="bg-orange-300 text-black px-[50px] py-[50px]">
            <div className="bg-orange-400 rounded-xl text-center px-[25px] py-[25px]"> 
            <h1 className="text-xl font-bold pb-[20px]">{name?.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())}</h1>
            {item.map((fact)=> {
                return <div key={fact.idMeal} className='lg:grid grid-cols-2 gap-[25px]'>
                    <img src={fact.strMealThumb}  alt={fact.strMeal} />
                    <div className="">
                        <div>
                         {VideoEmbedder(getParams())}
                        </div>
                        <div className='font-bold py-[10px] pt-[100px]'>Directions</div>
                    <div className=' text-xs text-left text-black bg-white rounded-2xl px-[50px] py-[25px]  border-solid border-4 border-white'>{fact.strInstructions}</div>
                    </div>
{/* <iframe className='video'
        title='Youtube player'
        
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
</iframe> */}
                </div>
            })}
            </div>
        </div>
      
    )
}

