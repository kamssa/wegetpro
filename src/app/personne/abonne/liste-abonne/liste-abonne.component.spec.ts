import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAbonneComponent } from './liste-abonne.component';

describe('ListeAbonneComponent', () => {
  let component: ListeAbonneComponent;
  let fixture: ComponentFixture<ListeAbonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAbonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
