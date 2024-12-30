"use client";
import { useEffect, useRef } from "react";
import { useAccount } from "@starknet-react/core";
import AddressBar from "../lib/AddressBar";
import ThemeSwitch from "./util/ThemeSwitch";
import ConnectButton from "../lib/Connect";
import useTheme from "@/app/components/internal/hooks/useTheme";
import Link from "next/link";
import MenuButton from "./MenuButton";
import Logo from "../Logo";

const Header = () => {
  // const { address } = useAccount();
  // const { theme, changeTheme } = useTheme();
  // const lastYRef = useRef(0);

  // useEffect(() => {
  //   const nav = document.getElementById("nav");
  //   const handleScroll = () => {
  //     const difference = window.scrollY - lastYRef.current;
  //     if (Math.abs(difference) > 50) {
  //       if (difference > 0) {
  //         nav?.setAttribute("data-header", "scroll-hide");
  //       } else {
  //         nav?.setAttribute("data-header", "scroll-show");
  //       }
  //       lastYRef.current = window.scrollY;
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="flex justify-between lg:px-32 px-7 py-5 shadow-xl f w-full"> 
      <Logo />
      {/* <div className="self-center">
        <ul className="flex gap-7 text-sm">
          <li><Link href={'/'} className="hover:text-[#F65A11]">Dashboard</Link></li>
          <li><Link href={'/'} className="hover:text-[#F65A11]">Features</Link></li>
          <li><Link href={'/'} className="hover:text-[#F65A11]">Privacy Policy</Link></li>
          <li><Link href={'/'} className="hover:text-[#F65A11]">Licensing</Link></li>
        </ul>
      </div> */}
         <ConnectButton />
      {/* <button className="bg-[#22331D] text-white text-sm py-2 px-3 rounded hover:bg-[#F65A11]">Connect wallet</button> */}

    </div>
    // <div
    //   onFocusCapture={(e) =>
    //     e.currentTarget.setAttribute("data-header", "scroll-show")
    //   }
    //   id="nav"
    //   className="fixed z-[9999] w-full px-2 pt-4 transition-all duration-500 md:px-8 md:pt-8"
    // >
    //   <header className="rounded-[12px] bg-primary-gradient md:rounded-[32px]">
    //     <div className="mx-auto flex h-16 max-w-[--header-max-w] items-center justify-between px-4 md:h-28 md:px-8">
    //       <div className="hidden w-[18.75rem] md:block">
    //         <Link href={"/"}>
    //           <img
    //             src="/assets/logo.png"
    //             alt="logo"
    //             className="h-full w-full"
    //           />
    //         </Link>
    //       </div>

    //       <Link href={"/"} className="block h-[35px] w-[35px] md:hidden">
    //         <img src="/assets/mobile-logo.png" alt="" />
    //       </Link>
    //       <div className="relative">
    //         {address ? (
    //           <div className="flex items-center gap-4">
    //             <AddressBar />
    //             <MenuButton />
    //           </div>
    //         ) : (
              // <ConnectButton />
    //         )}
    //         <ThemeSwitch
    //           className="absolute bottom-[-200%] left-3/4 md:grid lg:bottom-[-250%] lg:left-1/2"
    //           action={changeTheme}
    //           theme={theme}
    //         />
    //       </div>
    //     </div>
    //   </header>
    // </div>
  );
};

export default Header;
