import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsRegionComponent } from './alarms-region.component';

describe('AlarmsRegionComponent', () => {
  let component: AlarmsRegionComponent;
  let fixture: ComponentFixture<AlarmsRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmsRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
