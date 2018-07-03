import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerMembreComponent } from './creer-membre.component';

describe('CreerMembreComponent', () => {
  let component: CreerMembreComponent;
  let fixture: ComponentFixture<CreerMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
