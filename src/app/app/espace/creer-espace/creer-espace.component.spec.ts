import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerEspaceComponent } from './creer-espace.component';

describe('CreerEspaceComponent', () => {
  let component: CreerEspaceComponent;
  let fixture: ComponentFixture<CreerEspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerEspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
