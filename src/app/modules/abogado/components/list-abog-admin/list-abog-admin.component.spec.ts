import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbogAdminComponent } from './list-abog-admin.component';

describe('ListAbogAdminComponent', () => {
  let component: ListAbogAdminComponent;
  let fixture: ComponentFixture<ListAbogAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAbogAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAbogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
