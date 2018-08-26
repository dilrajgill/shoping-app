import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisDetailComponentComponent } from './crisis-detail-component.component';

describe('CrisisDetailComponentComponent', () => {
  let component: CrisisDetailComponentComponent;
  let fixture: ComponentFixture<CrisisDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
