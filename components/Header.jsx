import React from "react";
import { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

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
      </Wrapper>
    </header>
  );
};

export default Header;
