"use client";
import { Image } from "@heroui/image";

export default function Zoomed() {
  return (
    <div className=" flex flex-row gap-6 justify-between mx-auto p-4">
      <div>
        <Image isZoomed src={"/111.jpg"} alt="" width={400} height={330} />
      </div>
      <div>
        <Image isZoomed src={"/222.png"} alt="" width={400} height={330} />
      </div>
      <div>
        <Image isZoomed src={"/333.png"} alt="" width={400} height={330} />
      </div>
      <div>
        <Image isZoomed src={"/444.png"} alt="" width={400} height={330} />
      </div>
    </div>
  );
}
