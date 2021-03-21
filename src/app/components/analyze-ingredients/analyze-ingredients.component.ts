import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';
import { LoaderService } from 'src/app/services/loader.service';
import { NotificationService } from 'src/app/services/notifications.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-analyze-ingredients',
  templateUrl: './analyze-ingredients.component.html',
  styleUrls: ['./analyze-ingredients.component.scss'],
})
export class AnalyzeIngredientsComponent implements OnInit {
  inge: string = '1 cup tea';
  constructor(
    private loader: LoaderService,
    private ingredientsService: IngredientsService,
    private noti: NotificationService,
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  postNutrationDetails() {
    this.loader.show();
    const ingredientsARR = this.inge
      .replace(/(?:\r\n|\r|\n)/g, '\n')
      .split('\n');
    this.ingredientsService
      .postnutritionDetails(ingredientsARR)
      .subscribe((res) => {
        if (res && res['calories'] != 0) {
          const data = {
            ingredientsArr: res['ingredients'],
            totalNutrients: res['totalNutrients'],
          };
          this.noti.successNotification('Ingredients add successfully');
          this.store.setIngredients(data);
          this.router.navigate(['/ingredients-list']);
        } else {
          this.noti.errorNotification(
            'We cannot calculate the nutrition for some ingredients. Please check the ingredient spelling or if you have entered a quantities for the ingredients.'
          );
        }
      });
  }
}
