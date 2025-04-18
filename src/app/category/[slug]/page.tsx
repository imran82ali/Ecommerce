import {Products} from "@/utils/mock"
import ProductCard from "@/components/ProductCard";

const getProductbyCategory = (category:string) => {
    return Products.filter((product)=>product.categoru===category);
}


export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {

    const result = getProductbyCategory((await params).slug);

    return <div className="flex justify-evenly"> 
    {
        result.length > 0 ? result.map((product) => (
            <ProductCard 
            key={product.id} 
            cardimage={product.Pimage} 
            title={product.name} 
            price={product.price}
            categoru={product.categoru} 
            id={product.id}/>
          ))
        
        : <p>No Products Found</p>
    }
    
    
    </div>
  }