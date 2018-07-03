import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdministrationComponent } from './manage-administration.component';

describe('ManageAdministrationComponent', () => {
  let component: ManageAdministrationComponent;
  let fixture: ComponentFixture<ManageAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
