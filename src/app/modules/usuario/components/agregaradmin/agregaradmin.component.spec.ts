import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaradminComponent } from './agregaradmin.component';

describe('AgregaradminComponent', () => {
  let component: AgregaradminComponent;
  let fixture: ComponentFixture<AgregaradminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaradminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
