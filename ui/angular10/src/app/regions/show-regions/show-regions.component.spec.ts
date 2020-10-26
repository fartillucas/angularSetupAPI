import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRegionsComponent } from './show-regions.component';

describe('ShowRegionsComponent', () => {
  let component: ShowRegionsComponent;
  let fixture: ComponentFixture<ShowRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRegionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
