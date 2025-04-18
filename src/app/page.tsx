import Image from "next/image";
import Hero from "@/components/Views/Hero"
import ProductList from '@/components/Views/Productlist'


export default function Home() {
  return (
    <div> 
      <Hero/>
      <ProductList/>
    </div>
  );
}
