import React from "react";
import Image from "next/image";
import RotatingValues from "./RotatingValues";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh]">
      {/* -------------------- BACKGROUND IMAGE --------------------*/}
      <Image
        src="/images/hero.jpg"
        alt="hero background"
        fill
        className="object-cover object-top opacity-20"
      />

      <div className="absolute inset-0 flex items-center justify-center flex-col gap-9">
        <div className="flex items-center justify-center flex-col gap-4">
          <h1 className="text-5xl font-bold">
            We at Trihari Smart Solutions inherit following values
          </h1>
          <RotatingValues />
        </div>

        <p className="uppercase">
          With 11 years experience, we've developed many projects in web,
          android Digital marketing, Market Research. We provide innovative
          solutions.
        </p>

        <button className="bg-gray-500 text-white p-4 rounded-md font-bold text-sm">
          VIEW WORKS
        </button>
      </div>
    </section>
  );
};

export default Hero;
