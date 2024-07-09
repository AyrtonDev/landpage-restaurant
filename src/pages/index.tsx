import { Inter } from "next/font/google";
import MainLayout from "@/layout/main/MainLayout";
import { CldImage } from "next-cloudinary";
import { cloudinaryImages } from "@/constants/cloudinary";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <h1 className="font-custom font-bold text-xl">Landpage Restaurant</h1>

      <CldImage  width={1000} height={1000} alt="Sample" src={cloudinaryImages.main} />
    </MainLayout>
  );
}
