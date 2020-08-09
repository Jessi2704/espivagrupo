import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAbogadoComponent } from './agregar-abogado.component';

describe('AgregarAbogadoComponent', () => {
  let component: AgregarAbogadoComponent;
  let fixture: ComponentFixture<AgregarAbogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAbogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAbogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
