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
    description:"Premium wireless headphone with noise cancellation",
  },

   {
    id: 3,
    name:"Airpods",
    price: "20,500",
    image:"/IMG_E6514.JPG",
    description:"Premium wireless headphone with noise cancellation",
  },

   {
    id: 4,
    name:"Techno",
    price: "150,000",
    image:"/IMG_6517.PNG",
    description:"Premium wireless headphone with noise cancellation",
  },

   {
    id: 5,
    name:"Ipad pro",
    price: "900,800",
    image:"/IMG_E6518.JPG",
    description:"Premium wireless headphone with noise cancellation",
  },

   {
    id: 6,
    name:"Iphone 11",
    price: "234,000",
    image:"/IMG_6513.PNG",
    description:"Premium wireless headphone with noise cancellation",
  },
]

export function getProducts(){
  return product;
}

export function getProductById(id){
  return product.find((p) =>p.id === Number(id));
}