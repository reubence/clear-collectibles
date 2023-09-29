import React from "react";

/**
 * @component Borders
 * @description Represents a set of bordered div elements with varying heights and colors.
 * @param {string} className - Additional class name to be applied to the component.
 */

const Borders = ({ className }) => {
  return (
    <>
      <div
        className={`${
          className ? className : ""
        } border-t-[7px] border-[#6cd2ff] h-[12px] w-full bg-[#7ad6fd]`}
      ></div>
      <div
        className={`${
          className ? className : ""
        } border-t-[7px] border-b-[7px] border-[#6cd2ff] h-[25px] w-full bg-[#89dafc]`}
      ></div>
      <div
        className={`${
          className ? className : ""
        } border-b-[7px] border-[#6cd2ff] h-[30px] w-full bg-[#a6e2f8]`}
      ></div>
      <div
        className={`${
          className ? className : ""
        } border-b-[7px] border-[#6cd2ff] h-[40px] w-full bg-[#c2eaf5]`}
      ></div>
      <div
        className={`${
          className ? className : ""
        } border-b-[7px] border-[#6cd2ff] h-[70px] w-full bg-[#e1f2f1]`}
      ></div>
    </>
  );
};

export default Borders;
