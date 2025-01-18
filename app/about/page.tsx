import { title } from "@/components/primitives";
import { Image } from "@heroui/image";
export default function AboutPage() {
  return (
    <div>
      <div className="w-full">
        <Image
          isZoomed
          alt="Image with Zoom"
          src="/1.jpg"
          width={950}
          height={500}
        />
      </div>
      <h1 className={title()}>About</h1>
    </div>
  );
}
