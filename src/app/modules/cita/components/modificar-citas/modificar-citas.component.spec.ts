import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCitasComponent } from './modificar-citas.component';

describe('ModificarCitasComponent', () => {
  let component: ModificarCitasComponent;
  let fixture: ComponentFixture<ModificarCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
