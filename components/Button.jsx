import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Button = ({
  text = "menu",
  icon = <IoIosArrowDown />,
  position = "flex-row",
  bg_color = "white",
  text_color = "blue-500",
  text_color_hover = "white",
  hover_color = "blue-500",
}) => {
  return (
    <button
      className={`border-[1px] border-blue-500 px-5 py-2 rounded-full bg-${bg_color} text-${text_color} flex ${position} items-center gap-2 hover:bg-${hover_color} hover:text-${text_color_hover}`}
    >
      <h1 className="font-bold text-sm">{text}</h1>
      {icon}
    </button>
  );
};

export default Button;
