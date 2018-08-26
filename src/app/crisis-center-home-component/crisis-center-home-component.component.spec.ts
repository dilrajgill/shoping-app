import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisCenterHomeComponentComponent } from './crisis-center-home-component.component';

describe('CrisisCenterHomeComponentComponent', () => {
  let component: CrisisCenterHomeComponentComponent;
  let fixture: ComponentFixture<CrisisCenterHomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisCenterHomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisCenterHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
