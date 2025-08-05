"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [ourWork, setOurWork] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-around shadow-md">
        {/* -------------------- LOGO -------------------- */}
        <Image src="/images/logo.png" alt="logo" width={150} height={150} />

        {/* -------------------- DESKTOP NAVBAR -------------------- */}
        <nav className="hidden md:flex gap-5 font-bold text-sm">
          <div className="hover:text-sky-400">
            <Link href="/" onClick={() => setOurWork(false)}>
              HOME
            </Link>
          </div>

          <div className="hover:text-sky-400">
            <Link href="/about" onClick={() => setOurWork(false)}>
              ABOUT
            </Link>
          </div>

          <div className="hover:text-sky-400">
            <Link href="/service" onClick={() => setOurWork(false)}>
              SERVICE
            </Link>
          </div>

          <div className="relative">
            <div
              className="flex items-center gap-1 hover:text-sky-400 cursor-pointer"
              onClick={() => setOurWork(!ourWork)}
            >
              <p>OUR WORK</p>
              <TiArrowSortedDown />
            </div>

            {ourWork && (
              <div className="flex flex-col absolute bg-black text-white p-2 mt-2 w-max gap-2 rounded-sm">
                <Link
                  href="/our-work/our-clients"
                  className="hover:text-sky-400"
                  onClick={() => setOurWork(false)}
                >
                  OUR CLIENTS
                </Link>
                <Link
                  href="/our-work/our-products"
                  className="hover:text-sky-400"
                  onClick={() => setOurWork(false)}
                >
                  OUR PRODUCTS
                </Link>
              </div>
            )}
          </div>

          <div className="hover:text-sky-400">
            <Link href="/blog" onClick={() => setOurWork(false)}>
              BLOG
            </Link>
          </div>

          <div className="hover:text-sky-400">
            <Link href="/contact" onClick={() => setOurWork(false)}>
              CONTACT
            </Link>
          </div>
        </nav>

        {/* -------------------- HAMBURGER ICON -------------------- */}
        <div
          className="md:hidden mr-4 cursor-pointer hover:text-sky-500 text-2xl"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {/* -------------------- MOBILE NAVBAR -------------------- */}
      {showMobileMenu && (
        <div className="flex flex-col gap-2 items-center justify-center md:hidden py-2 text-sm font-bold bg-white shadow-md">
          <Link href="/" onClick={() => setShowMobileMenu(false)}>
            HOME
          </Link>
          <Link href="/about" onClick={() => setShowMobileMenu(false)}>
            ABOUT
          </Link>
          <Link href="/service" onClick={() => setShowMobileMenu(false)}>
            SERVICE
          </Link>
          <div>
            <div
              className="flex items-center gap-1 border-2"
              onClick={() => setOurWork(!ourWork)}
            >
              <p>OUR WORK</p>
              <TiArrowSortedDown />
            </div>

            {ourWork && (
              <div className="flex flex-col gap-2 items-center justify-center border-2">
                <Link href="/our-work/our-clients">OUR CLIENTS</Link>
                <Link href="/our-work/our-products">OUR PRODUCTS</Link>
              </div>
            )}
          </div>
          <Link href="/blog" onClick={() => setShowMobileMenu(false)}>
            BLOG
          </Link>
          <Link href="/contact" onClick={() => setShowMobileMenu(false)}>
            CONTACT
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
