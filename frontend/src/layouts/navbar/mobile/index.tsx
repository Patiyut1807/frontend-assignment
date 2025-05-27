"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const [isCategoryExpand, setCatagoryExpand] = useState(false);
  const NavLink = [
    { title: "TV Shows", link: "/tv-shows" },
    { title: "Movies", link: "/movies" },
  ];
  const handleCategoryBtnClick = () => {
    setCatagoryExpand((prev) => !prev);
  }
  return (
    <nav className=" flex flex-col  z-99    w-full fixed top-0 bg-gradient-to-b px-[20px] gap-[15px] from-[#080703] to-[#02020200] pt-4 pb-2">
      <div className="flex justify-between gap-[clamp(40px,2vw,67px)] ">
        <Link href={"/"}>
          <Image
            src={"/assets/navbar/netflix-card-icon.svg"}
            alt="Netflix logo"
            className=""
            width={24}
            height={38}
          ></Image>
        </Link>
        <div className="flex gap-[clamp(15px,2vw,33px)] items-center text-[22px] ">
          {/* Casts-btn */}
          <button className="w-[36px] hover:scale-110">
            <Image
              src={"/assets/navbar/chromecast.png"}
              alt="casts"
              layout="responsive"
              width={36}
              height={36}
            ></Image>
          </button>

          <button className="group flex gap-[15px] relative">
            <div className="w-[32px] h-[32px] bg-[#D9D9D9] rounded-xs"></div>
            <div className="absolute hidden flex-col group-hover:flex top-[110%] right-2 rounded-md w-[clamp(150px"></div>
          </button>
        </div>
      </div>
      <div className="flex justify-evenly  gap-[clamp(20px,2vw,28px)] text-[clamp(16px,2vw,24px)] text-[#ffffff] ">
        {NavLink.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`
              ${pathname === item.link ? "font-bold" : "font-normal"}
              origin-center
              hover:font-bold 
              `}
          >
            {item.title}
          </Link>
        ))}
        <button onClick={handleCategoryBtnClick} className="group flex gap-[15px] relative ">
          Categories
          <Image
            className={`profile-arrow group-hover:translate-y-1 ${isCategoryExpand && "rotate-180"}`}
            src={"/assets/navbar/arrow.svg"}
            alt="arrow"
            width={15}
            height={7}
          ></Image>
          <div className="absolute hidden flex-col group-hover:flex top-[110%] right-2 rounded-md w-[clamp(150px"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
