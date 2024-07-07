import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button"
import ButtonHeader from "@/components/ui/buttonHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>      
        <ButtonHeader>Book Now</ButtonHeader>
        
        <Button variant={"secondary"}>Our Menu</Button>

    </main>
  );
}
