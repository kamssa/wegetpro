import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAbonneComponent } from './manage-abonne.component';

describe('ManageAbonneComponent', () => {
  let component: ManageAbonneComponent;
  let fixture: ComponentFixture<ManageAbonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAbonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
