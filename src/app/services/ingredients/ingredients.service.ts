import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reciepe } from 'src/app/interfaces/reciepe';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  constructor(private http: HttpClient) {}

  //Post nutrition details
  postnutritionDetails(Ingredients:string[]): Observable<Reciepe>{
    return this.http.post(
      `${environment.endpoint}/api/nutrition-details?app_id=${environment.app_id}&app_key=${environment.app_key}`,
      {
        ingr: Ingredients,
      }
    );
  }
}
