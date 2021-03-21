import { Ingredient } from "./ingredient";
import { Totalnutrients } from "./totalnutrients";

export interface Reciepe{
    calories?:number,
    cautions?:Array<string>,
    dietLabels?:Array<string>,
    healthLabels?:Array<string>,
    totalDaily?:Array<Totalnutrients>,
    totalNutrients?:Array<Totalnutrients>,
    totalWeight?:number,
    uri?:string,
    yield?:number,
    ingredients?:Array<Ingredient>
}