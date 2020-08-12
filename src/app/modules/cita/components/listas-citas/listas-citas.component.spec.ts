import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasCitasComponent } from './listas-citas.component';

describe('ListasCitasComponent', () => {
  let component: ListasCitasComponent;
  let fixture: ComponentFixture<ListasCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
