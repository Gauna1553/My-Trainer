import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcepinfComponent } from './concepinf.component';

describe('ConcepinfComponent', () => {
  let component: ConcepinfComponent;
  let fixture: ComponentFixture<ConcepinfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcepinfComponent]
    });
    fixture = TestBed.createComponent(ConcepinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
