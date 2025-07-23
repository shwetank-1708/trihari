"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
  const [ourWork, setOurWork] = useState(false);

  return (
    <div className="flex items-center justify-around">
      <Image src="/images/logo.png" alt="logo" width={150} height={150} />

      <nav className="flex gap-5 font-bold text-sm">
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
    </div>
  );
};

export default Navbar;
