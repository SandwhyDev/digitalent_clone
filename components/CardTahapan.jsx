import React from "react";

const CardTahapan = () => {
  return (
    <div className="w-[250px] h-[300px] flex flex-col gap-4">
      <div className="w-full h-[50%] bg-blue-300 flex items-center justify-center rounded-xl">
        <img
          src="https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-[70%] "
        />
      </div>

      <div className="flex flex-col text-center gap-2">
        <h1 className="font-bold text-blue-500 text-xl ">PENDAFTARAN</h1>
        <p className="font-semibold text-gray-400">
          Pilih pada pelatihan yang diinginkan dan lakukan pendaftaran
        </p>
      </div>
    </div>
  );
};

export default CardTahapan;
