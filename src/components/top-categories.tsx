import React from "react";
import { Category } from "@/service/category";

export const TopCategories = async () => {
  const category = await Category();

  return (
    <div>
      <h1 className="text-[23px] font-light">
        <span className="text-blackout font-medium text-[23px]">
          Top Categories
        </span>
        Of The Month
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-[30px]">
        {category?.results.map((card) => (
          <div
            key={card.id} // Use card.id instead of category.id
            className="flex max-w-[300px] bg-white items-center p-4 border-[1px] border-superSilver justify-between"
          >
            <div>
              <p className="text-carbon text-sm">{card.title}</p>
              <p className="text-basaltGrey text-xs">(6-items)</p>
            </div>
            <img src={card.image} alt={card.title} className="w-[107px] h-[107px]" />
          </div>
        ))}
      </div>
    </div>
  );
};
