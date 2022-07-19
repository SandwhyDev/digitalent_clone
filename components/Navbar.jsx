import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { BiLogIn, BiUser } from "react-icons/bi";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-screen h-20 px-20 bg-white shadow-md fixed top-0 left-0 flex items-center gap-4 justify-between z-50">
      <div className="h-12 w-12 bg-red-500"></div>
      <Button />

      <div className="w-[800px] h-10 px-5 bg-slate-200 rounded-full relative flex items-center gap-3">
        <label htmlFor="search" className="text-gray-500">
          <FiSearch />
        </label>

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Cari"
          className="w-full bg-transparent outline-none"
        />
      </div>
      <Button text="Masuk" position="flex-row-reverse" icon={<BiLogIn />} />
      <Button
        text="Daftar"
        position="flex-row-reverse"
        icon={<BiUser />}
        bg_color="blue-500"
        text_color="white"
      />
    </nav>
  );
};

export default Navbar;
