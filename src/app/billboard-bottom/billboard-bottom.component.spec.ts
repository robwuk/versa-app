import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardBottomComponent } from './billboard-bottom.component';

describe('BillboardBottomComponent', () => {
  let component: BillboardBottomComponent;
  let fixture: ComponentFixture<BillboardBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillboardBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
