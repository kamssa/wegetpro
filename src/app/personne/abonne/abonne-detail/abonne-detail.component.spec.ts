import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonneDetailComponent } from './abonne-detail.component';

describe('AbonneDetailComponent', () => {
  let component: AbonneDetailComponent;
  let fixture: ComponentFixture<AbonneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
