import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonneImagesComponent } from './abonne-images.component';

describe('AbonneImagesComponent', () => {
  let component: AbonneImagesComponent;
  let fixture: ComponentFixture<AbonneImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonneImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonneImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
