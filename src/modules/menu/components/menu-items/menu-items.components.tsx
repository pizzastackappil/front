
import React from "react";
interface MenuItemProps {
  imagePath:string,
  weight:number,
  title:string,
  ingredients:string,
  price:number

}



export const MenuItem: React.FC<MenuItemProps> = ({imagePath,title,weight,ingredients,price}) => {
  return (
    <div className="w-96 shadow-xl rounded-2xl bg-white">
      <div className="relative">
        <img
          className="w-full h-[15rem] object-cover object-center rounded-t-2xl"
          src={imagePath} alt=''
        />
        <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
          {weight} gr
        </span>
      </div>
      <div className="p-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-8">{ingredients}</p>
        <span className="text-xl font-semibold">{price} грн</span>
      </div>
    </div>
  );
};
