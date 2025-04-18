import {Products} from "@/utils/mock"
import Image from "next/image";

const getProductDetail = (id:number | String) => {
  
  return Products.filter((product)=>product.id == id);
}


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
              Porduct Details :
              <h3 className='font-bold text-lg mt-3 ml-2'> {product.name}</h3>
              <h3 className='font-bold text-lg ml-2'> ${product.price}</h3>
              <h3 className='font-bold text-lg ml-2'>
            Category : <span className='font-normal text-base ml-2'>{product.categoru} </span></h3>
            </div> 

          </div>
        ))
    }
    
    
    </div>
  }