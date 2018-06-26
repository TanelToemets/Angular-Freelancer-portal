import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireflComponent } from './hirefl.component';

describe('HireflComponent', () => {
  let component: HireflComponent;
  let fixture: ComponentFixture<HireflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
