import React, { useState } from "react";
import logoBackground from "../images/logo1.png";
import { Link, LoaderFunction, useLoaderData } from "react-router-dom";
import { getRandomMeal } from "../services/Categories";
import food from '../images/food.jpg'

export const Modal = ({ open, onClose }: { open: boolean, onClose: () => void }) => {

  const data = useLoaderData() as RandomMealType[];

  if (!open) {

    return null

  }

  return (
    <div className="fixed inset-0 bg-gray opacity-98 backdrop-blur-xl flex justify-center items-center p-20">
      <div className="bg-white rounded-lg	 p-20 border-8 border-orange-400">

           <div className="text-center pb-10 font-bold text-xl">{data && data[0]?.strMeal}</div>
          <img src={data[0]?.strMealThumb} alt=""  className="h-[20px] lg:h-[40vh]" /> 
        <div className=" flex items-center justify-around gap-10 pt-10">
        <Link className=" border-orange-400 border-2 rounded-lg	 hover:bg-white text-orange-500 font-bold py-1.5 px-8" to={`categories/${data[0]?.strCategory}/${data[0]?.idMeal}`}>Details</Link>
        <button
          onClick={onClose}
          className="bg-orange-500 hover:bg-orange-800 text-white font-bold py-2 px-10 rounded">
          Close
        </button>
        </div>
      </div>
    </div>
  );
};
export const Welcome = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOnClose = () => {
    return setShowModal(false);
  }
  return (
    <>
      <Modal open={showModal} onClose={handleOnClose} />
      <img src={logoBackground} alt="brand-logo" className="h-auto max-w-full" />
      <img src={food} alt="food" className="h-[60vh] w-full object-cover"/>
      <div className="w-full p-20 bg-black">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-2 gap-10 pb-20 m-20">
          <div className=" w-[300px] flex justify-center text-lg bg-orange-500 rounded-3xl px-[10px] py-5 text-black font-bold  border-orange-300 border-8" onClick={() => setShowModal(true)}>Surprise Me!</div>
          <div className=" w-[300px] flex justify-center text-lg bg-orange-500 rounded-3xl p-5 text-black font-bold border-orange-300 border-8"><Link to={'/categories'}>View Categories</Link></div>
        </div>
      </div>


    </>
  );
};

export const randomMealGenerator: LoaderFunction = async () => {
  const results = await getRandomMeal();
  return results;
};
