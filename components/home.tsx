"use client";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";
import Zoomed from "./zoomed-image";

export default function Homee() {
  return (
    <div>
    <div className="relative mx-auto">
      <Image
        className="rounded-sm w-full h-auto dark:shadow-lg "
        src={"/1.jpg"}
        alt={"main"}
        width={1440}
        height={300}
      />
      <div className="mx-auto">
        <h1 className="absolute text-[#e6ccb3] italic inset-0 px-4 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-18 md:py-28 flex flex-col font-serif text-xl sm:text-2xl md:text-3xl">
          We are Roast & Boast Coffee
          <span className="py-2 text-white text-sm sm:text-base md:text-lg">
            and we absolutely love what we do!
          </span>
        </h1>
      </div>
      <div className="lg:absolute  md:absolute inset-0 flex items-center justify-center">
        <Link href={"/shop"}>
          <Button className="rounded-md mt-4 font-mono bg-[#e6ccb3] text-orange-900 px-4 py-2 text-sm sm:text-base ">
            See Menu
          </Button>
        </Link>
      </div>
    </div>
    <div className="mx-auto p-6 text-center font-mono text-lg">
        <p>
        Serving great coffee, fresh cakes and pastries, and providing the best service in vibrant and memorable spaces are among our values ​​at Lamiz Coffee Collection. Our goal, our effort, and our hope is to provide the best product at the best price and quality.


        </p>
    </div>
    <Zoomed />
    </div>
  );
}
