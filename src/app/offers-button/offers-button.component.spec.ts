import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersButtonComponent } from './offers-button.component';

describe('OffersButtonComponent', () => {
  let component: OffersButtonComponent;
  let fixture: ComponentFixture<OffersButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
