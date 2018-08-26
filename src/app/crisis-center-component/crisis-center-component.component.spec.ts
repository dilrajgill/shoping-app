import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisCenterComponentComponent } from './crisis-center-component.component';

describe('CrisisCenterComponentComponent', () => {
  let component: CrisisCenterComponentComponent;
  let fixture: ComponentFixture<CrisisCenterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisCenterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisCenterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
