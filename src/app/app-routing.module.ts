import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyzeIngredientsComponent } from './components/analyze-ingredients/analyze-ingredients.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:"" , component:AnalyzeIngredientsComponent},
  {path:"ingredients-list" , component:IngredientsListComponent},
  {path:"**" , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
