import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button"
import ButtonHeader from "@/components/ui/buttonHeader";
import ButtonTernary from "@/components/ui/buttonTernary";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4">      
        <ButtonHeader>Book Now</ButtonHeader>
        
        <Button variant={"secondary"}>Our Menu</Button>
        
        <ButtonTernary>Our Venue</ButtonTernary>

    </main>
  );
}
