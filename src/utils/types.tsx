import Image, { StaticImageData } from 'next/image';

export type Product = {
    id:number,
    name:string,
    price:number,
    categoru:string,
    Pimage:string | StaticImageData
}