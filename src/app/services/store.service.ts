import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { Ingredient } from "../interfaces/ingredient";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  toggled: Subject<boolean> = new BehaviorSubject<boolean>(false);
  ingredients : BehaviorSubject<Ingredient[]> = new BehaviorSubject(null);

  constructor() {}
  setIngredients(ingr:any){
    return this.ingredients.next(ingr)
  }
  getIngredients():Observable<any>{
    return this.ingredients.asObservable();
  }

}