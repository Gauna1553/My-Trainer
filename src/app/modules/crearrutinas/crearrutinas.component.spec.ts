import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearrutinasComponent } from './crearrutinas.component';

describe('CrearrutinasComponent', () => {
  let component: CrearrutinasComponent;
  let fixture: ComponentFixture<CrearrutinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearrutinasComponent]
    });
    fixture = TestBed.createComponent(CrearrutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
