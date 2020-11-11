import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAlarmsRegionComponent } from './show-alarms-region.component';

describe('ShowAlarmsRegionComponent', () => {
  let component: ShowAlarmsRegionComponent;
  let fixture: ComponentFixture<ShowAlarmsRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAlarmsRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAlarmsRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
