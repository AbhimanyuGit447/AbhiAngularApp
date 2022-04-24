import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalComponent } from './tax-cal.component';

describe('TaxCalComponent', () => {
  let component: TaxCalComponent;
  let fixture: ComponentFixture<TaxCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
