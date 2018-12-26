import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorBillboardComponent } from './interior-billboard.component';

describe('InteriorBillboardComponent', () => {
  let component: InteriorBillboardComponent;
  let fixture: ComponentFixture<InteriorBillboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorBillboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorBillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
