import React from "react";

const CardCountPelatihan = ({ count = "3.1K", title = "pelatihan" }) => {
  return (
    <div className="w-[300px] h-[120px] bg-white border-[1px] border-gray-200 rounded-xl p-5">
      <h1 className="text-3xl font-bold text-blue-700">{count}</h1>
      <p className="text-gray-400">{title}</p>
    </div>
  );
};

export default CardCountPelatihan;
