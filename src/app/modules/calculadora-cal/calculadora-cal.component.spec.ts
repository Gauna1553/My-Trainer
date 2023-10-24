import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCALComponent } from './calculadora-cal.component';

describe('CalculadoraCALComponent', () => {
  let component: CalculadoraCALComponent;
  let fixture: ComponentFixture<CalculadoraCALComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraCALComponent]
    });
    fixture = TestBed.createComponent(CalculadoraCALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
