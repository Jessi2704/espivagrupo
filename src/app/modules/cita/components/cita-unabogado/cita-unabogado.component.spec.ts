import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaUnabogadoComponent } from './cita-unabogado.component';

describe('CitaUnabogadoComponent', () => {
  let component: CitaUnabogadoComponent;
  let fixture: ComponentFixture<CitaUnabogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaUnabogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaUnabogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
