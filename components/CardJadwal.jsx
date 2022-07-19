import React from "react";
import { BiTime } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { AiOutlineShareAlt } from "react-icons/ai";
const CardJadwal = () => {
  return (
    <div className="group bg-white shadow-md w-[400px] h-auto rounded-xl flex flex-col relative">
      <div className="w-full h-[48%] absolute rounded-t-xl top-0 left-0 bg-black/20 hidden group-hover:flex  flex-col">
        {/* <h1>halo</h1> */}
      </div>
      <div className="flex items-center justify-between absolute top-3 left-3 right-0 px-5">
        <div className="px-2 py-1 bg-blue-200 w-fit rounded-full uppercase text-sm font-bold text-blue-800 ">
          Pelatihan Online
        </div>

        <div className="hidden gap-2  group-hover:flex">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <span className="text-gray-500">
              <AiOutlineShareAlt />
            </span>
          </div>
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <span className="text-black">
              <FcLike />
            </span>
          </div>
        </div>
      </div>

      <div className="px-2  absolute bottom-4 left-0 w-full hidden group-hover:flex">
        <button className="p-3  border-[1px] border-blue-500  w-full  rounded-full bg-white hover:bg-blue-500 hover:text-white font-bold text-blue-500">
          LIHAT
        </button>
      </div>

      <div className="w-full h-[200px] ">
        <img
          src="https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col px-5 pb-5">
        <div className="flex justify-between py-5">
          <div className="flex gap-3 items-center  z-20">
            <div className="w-14 h-14 rounded-full border-4 border-white p-1 -mt-16 ">
              <img
                src="https://kopiahemas.netlify.app/_ipx/w_1080,q_75/%2F_next%2Fstatic%2Fmedia%2FGojek.fa9e5427.png?url=%2F_next%2Fstatic%2Fmedia%2FGojek.fa9e5427.png&w=1080&q=75"
                alt=""
                className="w-full h-full"
              />
            </div>
            <p className="font-bold text-gray-500">Gojek</p>
          </div>

          <button className=" px-5  bg-green-200 rounded-full text-xs font-bold text-green-700">
            DIBUKA
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-bold">Bincang Biznis</h1>
            <p className="text-sm text-gray-500">
              Digital Entrepreneurship Academy
            </p>
          </div>
          <hr />

          <div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">
                <BiTime />
              </span>
              <p className="text-sm text-gray-500">Registrasi: 01 Jul 2022</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500">
                <BsPeople />
              </span>
              <p className="text-sm text-gray-500">Kouta: 1000 Peserta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardJadwal;
