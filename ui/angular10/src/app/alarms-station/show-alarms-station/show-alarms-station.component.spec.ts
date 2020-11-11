import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAlarmsStationComponent } from './show-alarms-station.component';

describe('ShowAlarmsStationComponent', () => {
  let component: ShowAlarmsStationComponent;
  let fixture: ComponentFixture<ShowAlarmsStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAlarmsStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAlarmsStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
