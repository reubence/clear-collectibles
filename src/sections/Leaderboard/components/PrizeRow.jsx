import React from "react";

/**
 * @component PrizeRow
 * @description Represents a row in a prize list. Each row displays a prize division and a corresponding description.
 * The component is structured to have a responsive design, with text size adjustments for small (sm) screens.
 * The row is highlighted by a subtle bottom border.
 *
 * @param {number | string} division - The division of the prize (e.g., 1 for first place). Can be a number or a string.
 * @param {string} description - A brief description of the prize for the corresponding division.
 */

const PrizeRow = ({ division, description, top, number }) => {
  return (
    <div className="flex w-full justify-between items-center pb-2 border-b-[1.5px] border-[#ffffff33]">
      <div className="flex justify-center items-start gap-1">
        <span className="text-white font-montserrat text-base font-bold uppercase">
          {top && "Top"}
        </span>
        <span className="text-white font-black font-montserrat text-xl 2xl:text-[35px] uppercase">
          {top && division}
        </span>
        <span className="text-white font-black font-montserrat text-xl 2xl:text-[28px] uppercase">
          {!top && number}
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-white font-black font-montserrat text-base lg:text-[16px] xl:text-[16px] 2xl:text-[20px] uppercase">
          {description}
        </span>
      </div>
    </div>
  );
};

export default PrizeRow;
