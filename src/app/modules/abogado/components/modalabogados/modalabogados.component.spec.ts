import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalabogadosComponent } from './modalabogados.component';

describe('ModalabogadosComponent', () => {
  let component: ModalabogadosComponent;
  let fixture: ComponentFixture<ModalabogadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalabogadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalabogadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
