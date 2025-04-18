import { Badge } from "@/components/ui/badge"
import {ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import HeroImage from '../../../public/hero.webp';

import Image from 'next/image';

export default function Hero() {
    return (
      <section className="flex justify-between flex-col gap-y-10 lg:flex-row py-8 px-8">
          {/* left Div */}
          <div className="flex- py-20 w-[450px] ">
            <Badge className="py-3 rounded-md bg-blue-100  text-blue-700 hover:bg-blue-100">Sale 70%</Badge>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
                An Industrial Take on Streetwear
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
            </p>
            <Button className="py-7 px-8 mt-3">
                <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
            </Button>  
          </div>
          
          {/* Right Div */}
          <div className="flex- py-10   ">        
          <div className="static m-3 flex  h-[600px] w-[600px] items-center justify-center rounded-full bg-orange-100"> 
                <Image className="absolute h-[600px] w-[600px] mt-[-45px]" 
                src={HeroImage} alt='heroimage'/>
          </div>
          </div>
      </section>
      )
  }