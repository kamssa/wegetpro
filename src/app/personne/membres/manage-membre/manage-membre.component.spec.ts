import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMembreComponent } from './manage-membre.component';

describe('ManageMembreComponent', () => {
  let component: ManageMembreComponent;
  let fixture: ComponentFixture<ManageMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
