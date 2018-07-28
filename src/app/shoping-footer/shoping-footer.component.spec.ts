import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingFooterComponent } from './shoping-footer.component';

describe('ShopingFooterComponent', () => {
  let component: ShopingFooterComponent;
  let fixture: ComponentFixture<ShopingFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
