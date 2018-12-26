import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersaTextComponent } from './versa-text.component';

describe('VersaTextComponent', () => {
  let component: VersaTextComponent;
  let fixture: ComponentFixture<VersaTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersaTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersaTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
