import Link from 'next/link';

import Image, { StaticImageData } from 'next/image';

function ProductCard(props:{title:string, 
    price:number, 
    cardimage:string|StaticImageData,
    categoru:string,
    id:number
    }) {
    console.log(props)
  return (
    <Link href={`/Products/${props.id}`}>
    <div> 
        <Image className='w-80 h-100' src={props.cardimage} alt='product1'/>
        <h3 className='font-bold text-lg mt-3'> {props.title}</h3>
        <h3 className='font-bold text-lg '> ${props.price}</h3>
        <h3 className='font-bold text-lg '>
            Category : <span className='font-normal text-base '>{props.categoru} </span></h3>

    </div>
    </Link>
  )
}

export default ProductCard;