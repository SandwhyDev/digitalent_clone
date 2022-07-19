import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CardRilis = () => {
  return (
    <div className="w-[350px] h-[380px] bg-white shadow-xl rounded-xl relative flex flex-col ">
      <div>
        <img
          src="https://images.pexels.com/photos/3851254/pexels-photo-3851254.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-full h-[60%] object-cover rounded-t-xl"
        />

        <div className="flex flex-col -space-y-3">
          <div className="flex justify-between p-5">
            <p className="text-gray-500">18 Juli 2022</p>
            <div className="px-2 py-1 bg-blue-200 w-fit rounded-full uppercase text-xs font-bold text-blue-500 ">
              Penting
            </div>
          </div>

          <p className="px-5 font-semibold text-lg">
            Pengumuman Peserta Batch 3 Professional Academy
          </p>
        </div>
      </div>

      <div className="w-full px-5 text-gray-500 flex gap-2  items-center justify-end">
        <p>Lihat Detail</p>
        <span>
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
};

export default CardRilis;
