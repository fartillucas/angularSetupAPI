import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStationsComponent } from './show-stations.component';

describe('ShowStationsComponent', () => {
  let component: ShowStationsComponent;
  let fixture: ComponentFixture<ShowStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
