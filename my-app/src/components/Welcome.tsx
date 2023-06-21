import React, { useState } from "react";
import logoBackground from "../images/logo1.png";
import { Link, LoaderFunction, useLoaderData } from "react-router-dom";
import { getRandomMeal } from "../services/Categories";


export const Modal = ({ open, onClose }: { open: boolean, onClose: () => void }) => {

  const data = useLoaderData() as RandomMealType[];

  if (!open) {

    return null

  }

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black opacity-90 backdrop-blur-sm flex justify-center items-center p-20">
      <div className="bg-white p-20 rounded">
        <div className="font-bold p-20">
          <p>{data && data[0]?.idMeal}</p>
          <p>{data && data[0]?.strArea}</p>
          <p>{data[0].strMeal}</p>
          <img src={data[0]?.strMealThumb} alt="" />
        </div>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
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
      <header>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3 ">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-700">
                  <a href="#" className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Brand</a>
                </div>

                <div className="flex md:hidden">
                  <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="hidden -mx-4 md:flex md:items-center">
                <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Web developers</a>
                <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Web Designers</a>
                <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">UI/UX Designers</a>
                <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <img src={logoBackground} alt="brand-logo" className="h-auto max-w-full" />
      </header>
      <Modal open={showModal} onClose={handleOnClose} />
      <div className="w-full p-20 bg-orange-500">
        <div className="flex justify-center pt-10 pb-20 text-4xl font-bold">Let's Eat!</div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pb-20">
    <div className="flex justify-center text-sm border-4 border-orange-300 rounded-3xl p-6 bg-gray-800 text-white font-bold" onClick={() => setShowModal(true)}>Surprise Me</div>
    <div className="flex justify-center text-sm border-4 border-orange-300 rounded-3xl p-6 bg-gray-800 text-white font-bold"><Link to={'/options'}>View Categories</Link></div>
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
