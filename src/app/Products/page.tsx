import ProductCard from "@/components/ProductCard";
import {Products} from "@/utils/mock"

const AllProducts =() =>{
//   const productChunks=Products.slice(0,2);
    // console.log(productChunks)
    return (
      <section>
      <div>
      <h4 className="text-center font-bold text-sm mt-3 text-blue-800 ">PRODUCTS</h4>
      <h2 className="text-center font-bold text-3xl mt-3 mb-20">Check What We Have</h2>
      </div>
      <div className="flex justify-evenly"> 
      {Products.map((product) => (
          <ProductCard 
          key={product.id} 
          cardimage={product.Pimage} 
          title={product.name} 
          price={product.price} 
          categoru={product.categoru}
          id={product.id}/>
        ))
      }
          {/* <ProductCard img={Product1} title="Brushed Bomber 1" price={210} />        
          <ProductCard img={Product2} title="Felx Sweat Shirt" price={175} />
          <ProductCard img={Product3} title="Imperial Alpaca Hoodie" price={525} /> */}
      </div>
     </section>
    );
};
export default AllProducts;