import {  Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Nutrient } from 'src/app/interfaces/nutrients';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {

  constructor(private store:StoreService) { }
 ingredients:Ingredient[] ; 
 totalNutrients:Nutrient[];
 TotalNutrientsDetails:Nutrient[]= [];
 showTotalNutrients:boolean = false;
  ngOnInit(): void {
    // Get Ingredients Array & Total Nutrients
    this.store.getIngredients().subscribe(res=>{
      if(res){
        this.ingredients = res.ingredientsArr;
        this.totalNutrients = res.totalNutrients;
        for(const prop in this.totalNutrients){
          let NutrientsDetails = this.totalNutrients[prop];
        this.TotalNutrientsDetails.push(NutrientsDetails);
     
        }
      }
 
    })

  }
 

}
