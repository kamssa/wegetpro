import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerMembreComponent } from './editer-membre.component';

describe('EditerMembreComponent', () => {
  let component: EditerMembreComponent;
  let fixture: ComponentFixture<EditerMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
