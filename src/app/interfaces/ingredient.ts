import { Nutrient } from "./nutrients";

export interface Ingredient {
   text:string,
   parsed:{
    food:string,
    foodId:string,
    foodMatch:string,
    measure:string,
    measureURI:string,
    nutrients:Nutrient,
    quantity:number,
    retainedWeight:number,
    status:string,
    weight:number
   }
  
}