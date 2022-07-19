import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import SwiperBanners from "../components/Swiper.Banner";
import Navbar from "../components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import CardJadwal from "../components/CardJadwal";
import CardTahapan from "../components/CardTahapan";
import CardRilis from "../components/CardRilis";
import CardCountPelatihan from "../components/CardCountPelatihan";

export default function Home() {
  return (
    <div className="w-full  flex flex-col bg-white gap-4 ">
      <Navbar />
      <div className="fixed bottom-10 right-16 w-32 h-32 bg-red-500 z-50">
        {" "}
        butuh bantuan
      </div>
      <div className="w-full h-[400px] bg-red-500 mt-32">
        <SwiperBanners pagination={true} />
      </div>

      <div className="w-full h-[100px] px-20 ">
        <SwiperBanners slidePerView={4} navigation={true} />
      </div>

      <div className="w-full  px-20 py-10 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Women In Tech 2022</h1>
          <div className="flex items-center gap-2">
            <p className="capitalize font-semibold">lihat semua</p>
            <span>
              <IoIosArrowForward />
            </span>
          </div>
        </div>

        <CardJadwal />
      </div>

      <div className="w-full  px-20 py-10 flex flex-col gap-10">
        <h1 className="text-center text-5xl font-bold">
          Tahapan Pendaftaran <br /> Digital Talent Scholarship
        </h1>

        <div className="flex gap-4 justify-between">
          <CardTahapan />
          <CardTahapan />
          <CardTahapan />
          <CardTahapan />
        </div>
      </div>

      <div className="w-full  px-20 py-10 flex flex-col gap-10  ">
        <h1 className="text-center text-5xl font-bold">
          Rilis Media & Informasi Terbaru
        </h1>

        <div className="flex gap-4 justify-between  ">
          <CardRilis />
          <CardRilis />
          <CardRilis />
        </div>

        <div className="flex justify-center">
          <button className="py-3 px-5  border-[1px] border-blue-500  w-fit  rounded-full bg-white hover:bg-blue-500 hover:text-white font-bold text-blue-500 flex gap-2 items-center text-center">
            Lihat Selengkapnya
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </div>

      <div className="w-full h-[350px] justify-between  px-20 py-10 flex  gap-10 ">
        <div className="w-[40%] h-full flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h1 className=" text-5xl font-bold">
              Galeri Terupdate <br /> dan Terkini
            </h1>
            <p className="text-gray-500 font-semibold">
              Temukan konten terupdate dan terkini mengenai <br /> Digital
              Talent Scholarship
            </p>
          </div>

          <button className="py-3 px-5  border-[1px] border-blue-500  w-fit  rounded-full bg-white hover:bg-blue-500 hover:text-white font-bold text-blue-500 flex gap-2 items-center">
            Lihat Selengkapnya
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </div>

        <div className="w-[50%] h-full  flex justify-end">
          <div className="w-[50%] h-[80%] bg-green-500 rounded-xl">
            <img
              src="https://images.pexels.com/photos/205416/pexels-photo-205416.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-full h-full object-cover rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] justify-between  px-20 py-10 flex flex-row-reverse  gap-10 ">
        <div className="w-[50%] h-full flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h1 className=" text-4xl font-bold">
              Informasi Dalam Video Terkini
            </h1>
            <p className="text-gray-500 text-xl">
              Digiers, mau banget #JadiJagoanDigital? Tapi masih bingung cara
              daftarnya gimana? Nih, Mindsy mau kasih tau bagaimana cara
              mendaftar pelatihan DTS 2022! Simak ya Digiers! Gimana, sudah
              tahukan? Yuk, ...
            </p>
          </div>

          <button className="py-3 px-5  border-[1px] border-blue-500  w-fit  rounded-full bg-white hover:bg-blue-500 hover:text-white font-bold text-blue-500 flex gap-2 items-center">
            Lihat Selengkapnya
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </div>

        <div className="w-[50%] h-full  flex justify-end">
          <div className="w-full h-full bg-green-500 rounded-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/iTZ1I6drVkw"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              classname="rounded-xl"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[350px] justify-between  px-20 py-10 flex  gap-10 ">
        <div className="w-[40%] h-full flex flex-col gap-4">
          <h1 className=" text-5xl font-bold text-gray-400">
            Ayo Bergabung, <br /> Jadi Jagoan <br /> Digital!
          </h1>

          <button className="py-3 px-5  border-[1px] bg-blue-500  w-fit flex items-center gap-1  rounded-full text-white font-semibold ">
            Daftar Sekarang
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </div>

        <div className="w-[60%] h-full  flex gap-4 ">
          <CardCountPelatihan />
          <CardCountPelatihan count="406.8K" />
          <CardCountPelatihan count="336.2K" />
          <CardCountPelatihan count="209.3K" title="Peserta Lulus" />
        </div>
      </div>

      <footer className="w-full bg-blue-600 flex flex-col">
        <div className="flex gap-4 justify-between  border-white px-20 py-10">
          <div className="w-[20%] h-32 bg-red-500"></div>
          <div className=" w-[80%] h-32 text-white border-r-[.5px] border-white">
            <p>
              Program Digital Talent Scholarship bertujuan untuk meningkatkan
              keterampilan dan daya saing, produktivitas, profesionalisme SDM
              bidang teknologi informasi dan komunikasi bagi angkatan kerja muda
              Indonesia, masyarakat umum, dan aparatur sipil negara
            </p>
          </div>
          <div className="w-[30%] h-32 bg-red-500"></div>
        </div>
        <hr />

        <div className="flex gap-4 justify-between  border-white px-20 py-10">
          <div className="w-[40%] h-full flex flex-col text-white text-xl">
            <h1 className="font-bold ">Alamat</h1>
            <p>
              Kementerian Komunikasi dan Informatika RI Jl. Medan Merdeka Barat
              No. 9, Jakarta Pusat, 10110
            </p>
          </div>

          <div className="w-[40%] h-full flex flex-col text-white text-xl">
            <h1 className="font-bold ">Pranala Luar</h1>
            <p>Kementerian Kominfo Badan Litbang SDM Kominfo</p>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-center flex-col py-10 w-full text-white font-bold">
          <p>Copyright © 2021 | Kementerian Komunikasi dan Informatika</p>
        </div>
      </footer>
    </div>
  );
}
