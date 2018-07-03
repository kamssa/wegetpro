import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEspaceComponent } from './manage-espace.component';

describe('ManageEspaceComponent', () => {
  let component: ManageEspaceComponent;
  let fixture: ComponentFixture<ManageEspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
