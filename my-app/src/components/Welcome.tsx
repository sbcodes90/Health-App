import React, { useState } from "react";
import logoBackground from "../images/logo1.png";
import { Link, LoaderFunction, useLoaderData } from "react-router-dom";
import { getRandomMeal } from "../services/Categories";
import food from '../images/food.jpg'
import Nav from "./Nav";
export const Modal = ({ open, onClose }: { open: boolean, onClose: () => void }) => {

  const data = useLoaderData() as RandomMealType[];

  if (!open) {

    return null

  }

  return (
    <div onClick={onClose} className="fixed inset-0 bg-gray opacity-98 backdrop-blur-xl flex justify-center items-center p-20">
      <div className="bg-white rounded p-20">

           <div className="text-center pb-10 font-bold text-xl">{data && data[0]?.strMeal}</div>
          <img src={data[0]?.strMealThumb} alt=""  className="lg:h-[40vh]" /> 

        {/*  <p>{data && data[0]?.strArea}</p>
          <p>{data[0].strMeal}</p>
          <img src={data[0]?.strMealThumb} alt=""  className="w-['10vh']"/> */}
        <div className="flex justify-center gap-10 pt-10">
        <button>Details</button>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded r">
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
      <Nav />
      <Modal open={showModal} onClose={handleOnClose} />
      <img src={logoBackground} alt="brand-logo" className="h-auto max-w-full" />
      <img src={food} alt="picture-of-food" className="h-[60vh] w-full object-cover"/>
      <div className="w-full p-20 bg-black">
        <div className="flex justify-center pt-10 lg:pb-20 text-4xl font-bold text-white">Let's Eat!</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 pb-20 m-20">
          <div className="flex justify-center text-sm bg-orange-500 rounded-3xl p-6 text-black text-xl font-bold" onClick={() => setShowModal(true)}>Surprise Me!</div>
          <div className="flex justify-center text-sm bg-orange-500 rounded-3xl p-6 text-black text-xl font-bold"><Link to={'/options'}>View Categories</Link></div>
        </div>
      </div>


    </>
  );
};

export const randomMealGenerator: LoaderFunction = async () => {
  const results = await getRandomMeal();
  console.log("random meal", results);
  return results;
};
