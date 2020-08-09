import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAbogadoComponent } from './listar-abogado.component';

describe('ListarAbogadoComponent', () => {
  let component: ListarAbogadoComponent;
  let fixture: ComponentFixture<ListarAbogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAbogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAbogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
