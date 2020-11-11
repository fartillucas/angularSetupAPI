import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsStationComponent } from './alarms-station.component';

describe('AlarmsStationComponent', () => {
  let component: AlarmsStationComponent;
  let fixture: ComponentFixture<AlarmsStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmsStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
