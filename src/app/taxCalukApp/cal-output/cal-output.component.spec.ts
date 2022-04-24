import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalOutputComponent } from './cal-output.component';

describe('CalOutputComponent', () => {
  let component: CalOutputComponent;
  let fixture: ComponentFixture<CalOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
