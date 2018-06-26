import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeflComponent } from './becomefl.component';

describe('BecomeflComponent', () => {
  let component: BecomeflComponent;
  let fixture: ComponentFixture<BecomeflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
