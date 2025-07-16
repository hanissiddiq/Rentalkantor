// "use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BenefitSection from "@/components/BenefitSection";
import CitiesSection from "@/features/cities/sections/CitiesSection";
import FreshSpaceSection from "@/features/offices/sections/FreshSpaceSection";

export const metadata = {
  title: 'Web Rental Kantor',
};


export default function Home() {
  return (
<>

  <Navbar /> 
  <Header />
  <CitiesSection />
  <BenefitSection />
  <FreshSpaceSection/>
  
</>
  );
}
