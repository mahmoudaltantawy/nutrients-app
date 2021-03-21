import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myhttpInterceptors } from './interceptors';
import { MessageService } from 'primeng/api';
import { NotificationService } from './services/notifications.service';
import { AnalyzeIngredientsComponent } from './components/analyze-ingredients/analyze-ingredients.component';

import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyzeIngredientsComponent,
    IngredientsListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    
  ],
  providers: [myhttpInterceptors ,MessageService, NotificationService ],
  bootstrap: [AppComponent]
})


export class AppModule { }
