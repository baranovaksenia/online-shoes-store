import React from "react";
import { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [showCategMenu, setShowCategMenu] = useState(false);
  const [categories, setCategories] = useState(null);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] flex items-center justify-between bg-white z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex items-center justify-between ">
        <Link href="/">
          <Image src="/assets/logo.svg" width={50} height={50} />
        </Link>
        <Menu
          showCategMenu={showCategMenu}
          setShowCategMenu={setShowCategMenu}
          categories={categories}
        />

        {/* heart, basket, mobileNav icon */}
        <div className="flex items-center gap-2 text-black">
          {/* heart icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>
          {/* icon end */}

          {/* Basket icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <BsCart className="text-[15px] md:text-[20px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute 
            top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px]
            md:px-[5px]
            "
            >
              5
            </div>
          </div>
          {/* Icon end */}

          {/* Mobile icon start */}
          <div
            className="md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer
          relative -mr-2
          "
          >
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
