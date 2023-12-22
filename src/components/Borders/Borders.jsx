import React from "react";

/**
 * @component Borderss
 * @description Represents a set of bordered div elements with varying heights and colors.
 * @param {string} className - Additional class name to be applied to the component.
 */

const Borders = ({ className }) => {
  return (
    <>
      <div
        className={`${
          className ? className : ""
        } border-t-[7px] border-[#C7E5F2] h-[12px] w-full bg-[#FFFFFF]`}
      ></div>
      <div
        className={`${
          className ? className : ""
        } border-t-[7px] border-b-[7px] border-[#C7E5F2] h-[25px] w-full bg-[#FFFFFF]`}
      ></div>
      <div
        className={`${
          className ? className : ""
        } border-b-[7px] border-[#C7E5F2] h-[30px] w-full bg-[#FFFFFF]`}
      ></div>
      <div
        className={`${
          className ? className : ""
        } border-b-[7px] border-[#C7E5F2] h-[40px] w-full bg-[#FFFFFF]`}
      ></div>
      <div
        className={`${
          className ? className : ""
        } border-b-[7px] border-[#C7E5F2] h-[70px] w-full bg-[#FFFFFF]`}
      ></div>
    </>
  );
};

export default Borders;
