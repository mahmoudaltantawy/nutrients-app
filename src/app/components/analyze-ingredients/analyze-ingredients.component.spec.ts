import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Reciepe } from 'src/app/interfaces/reciepe';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';
import { reciepeMockup } from 'src/app/testing/mock-data/ingredients.mock';

import { AnalyzeIngredientsComponent } from './analyze-ingredients.component';

describe('AnalyzeIngredientsComponent', () => {
  let component: AnalyzeIngredientsComponent;
  let fixture: ComponentFixture<AnalyzeIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzeIngredientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrive reciepe', async() => {
    let reciepe = fixture.debugElement.injector.get(IngredientsService)
    const response: Reciepe = reciepeMockup ; 
      spyOn(reciepe , 'postnutritionDetails').and.returnValue(of(response).pipe(delay(1)))
  });
});
