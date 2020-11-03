import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowForecastsComponent } from './show-forecasts.component';

describe('ShowForecastsComponent', () => {
  let component: ShowForecastsComponent;
  let fixture: ComponentFixture<ShowForecastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowForecastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowForecastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
