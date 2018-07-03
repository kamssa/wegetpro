import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEspaceComponent } from './modif-espace.component';

describe('ModifEspaceComponent', () => {
  let component: ModifEspaceComponent;
  let fixture: ComponentFixture<ModifEspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifEspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
