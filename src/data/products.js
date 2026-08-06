export const product=[
  {
    id: 1,
    name:"Wireless HeadPhones",
    price: "15,000",
    image:"/IMG_E6516.JPG",
    description:"Premium wireless headphone with noise cancellation",
  },

   {
    id: 2,
    name:"Iphone 17",
    price: "2,500,000",
    image:"/IMG_6512.JPG",
    description:"RAM 8GB, storage 256GB, iOS 26 wit Apple intelligence built-in",
  },

   {
    id: 3,
    name:"Airpods",
    price: "20,500",
    image:"/IMG_E6514.JPG",
    description:"Apple airpods with USB-C charging case. Seamless pairing with iphone/ipad/Mac",
  },

   {
    id: 4,
    name:"Techno",
    price: "150,000",
    image:"/IMG_6517.PNG",
    description:"Dimensity 8200 ultra, 12GB RAM, 512GB storage. Techno current camera king and best seller in Nigeria",
  },

   {
    id: 5,
    name:"Ipad pro",
    price: "900,800",
    image:"/IMG_E6518.JPG",
    description:"10.9 inch Liquid Retina display, A14 Bionic chip, USB-C, 56GB storage",
  },

   {
    id: 6,
    name:"Iphone 11",
    price: "234,000",
    image:"/IMG_6513.PNG",
    description:"RAM 4GB, storage 128GB , Glass back.",
  },
]

export function getProducts(){
  return product;
}

export function getProductById(id){
  return product.find((p) =>p.id === Number(id));
}