import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/layout/main/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <h1 className="font-custom font-bold text-xl">Landpage Restaurant</h1>

      <div className="flex items-center">
        <div className="bg-custom-primary-f w-10 h-10"></div>
        <div className="bg-custom-primary-q w-10 h-10"></div>
        <div className="bg-custom-primary-h w-10 h-10"></div>
        <div className="bg-custom-primary-w w-10 h-10"></div>
        <div className="bg-custom-secondary-f w-10 h-10"></div>
        <div className="bg-custom-secondary-q w-10 h-10"></div>
        <div className="bg-custom-secondary-h w-10 h-10"></div>
        <div className="bg-custom-secondary-w w-10 h-10"></div>
      </div>
    </MainLayout>
  );
}
