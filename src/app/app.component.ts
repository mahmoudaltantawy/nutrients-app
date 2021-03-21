import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inge: string;
  title = 'NutritionApp';
    constructor(public load: LoaderService, public store: StoreService){

  }
  

}


