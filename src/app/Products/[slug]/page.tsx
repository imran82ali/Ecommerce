import Quantity from "@/components/Quantity";
import {Products} from "@/utils/mock"
import Image from "next/image";

const getProductDetail = (id:number | String) => {
  
  return Products.filter((product)=>product.id == id);
}

const sizes = ["XS", "SM","MD","LG","XL"]

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: number }>
  }) {
    const result = getProductDetail((await params).slug);
    
    return <div className="flex mt-16 py-10 flex-wrap"> 
    {   
        result.map((product) => (
          <div key={product.id} className="flex justify-between gap-6">
            <div>
            <Image className='ml-10 w-80 h-100' src={product.Pimage} alt={product.name}/>
            </div>
            <div>
              {/* Porduct Details : */}
              <h3 className='font-bold text-lg'> {product.name}</h3>
              <h3 className='font-bold text-lg '> ${product.price}</h3>
              <h3 className='font-semibold text-sm  mt-2'>
            SELECT SIZE   </h3>
            <div className="flex gap-x-3 mt-1"> 
            {
              sizes.map((item)=>{
                return <div className="w-6 h-6 duration-300 border-2 rounded-full hover:shadow-2xl flex justify-center items-center" > 
              <span className="text-[10px] font-semibold text-gray-800 "> 
                {item} </span>  </div>
              })
            }
            </div>
            {/* Quantity */}
            <div className="flex items-center mt-6 ">
              <h3 className="text=[10px] text-semibold ">Quantity</h3>
              <div> <Quantity/> </div>
            </div>
            {/* Add to card and Price */}
            <div className="flex gap-x-3 mt-3"> 
              <h3> Add to Card </h3>
              <h3 className="font-bold"> $ {product.price} </h3>
            </div>

            </div> 

          </div>
        ))
    }
    
    
    </div>
  }