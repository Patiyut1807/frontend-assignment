"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();

  const NavLink = [
    { title: "Home", link: "/" },
    { title: "TV Shows", link: "/tv-shows" },
    { title: "Movies", link: "/movies" },
    { title: "New & Popular", link: "/trend" },
    { title: "My List", link: "/my-list" },
    { title: "Browse by Languages", link: "/languages" },
  ];
  return (
    <nav className=" flex items-center justify-between z-99   h-[102px] w-full fixed bg-gradient-to-b from-[#080703] to-[#02020200] px-[clamp(20px,3.6vw,90px)] ]">
      <div className="flex gap-[clamp(40px,2vw,67px)] ">
        <Link href={"/"}>
          <Image
            src={"/assets/navbar/netflix-logo.svg"}
            alt="Netflix logo"
            className="w-[clamp(120px,10vw,140px)]"
            width={139}
            height={38}
          ></Image>
        </Link>
        <div className="flex gap-[clamp(20px,2vw,28px)] items-center text-[22px] ">
          {NavLink.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`
              ${pathname === item.link ? "font-bold" : "font-normal"}
              text-[clamp(16px,1vw,18px)]
              text-[#DADADA] 
              origin-center
              hover:font-bold 
              hover:[#ffffff] 
              `}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-[clamp(40px,2vw,67px)] ">
        <div className="flex gap-[clamp(15px,2vw,33px)] items-center text-[22px] ">
          {/* search-btn */}
          <button className="w-[clamp(28px,2vw,36px)] hover:scale-110">
            <Image
              src={"/assets/navbar/search-icon.svg"}
              alt="search"
              layout="responsive"
              width={36}
              height={28}
            ></Image>
          </button>
          {/* Kids-btn */}
          <button className="w-[clamp(36px,2vw,43px)] hover:scale-110">
            <Image
              src={"/assets/navbar/kids-icon.svg"}
              alt="search"
              layout="responsive"
              width={43}
              height={28}
            ></Image>
          </button>
          {/* Notification-btn */}
          <button className="w-[clamp(28px,2vw,32px)] hover:scale-110">
            <Image
              src={"/assets/navbar/bell-icon.svg"}
              alt="search"
              layout="responsive"
              width={32}
              height={30}
            ></Image>
          </button>
          <button className="group flex gap-[15px] relative">
            <div className="w-[48px] h-[48px] bg-[#D9D9D9] rounded-md"></div>
            <Image
              className="profile-arrow group-hover:translate-y-1"
              src={"/assets/navbar/arrow.svg"}
              alt="arrow"
              width={15}
              height={7}
            ></Image>
            <div className="absolute hidden flex-col group-hover:flex top-[110%] right-2 rounded-md w-[clamp(150px"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
