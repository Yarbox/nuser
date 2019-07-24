import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPostPackComponent } from './order-post-pack.component';

describe('OrderPostPackComponent', () => {
  let component: OrderPostPackComponent;
  let fixture: ComponentFixture<OrderPostPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPostPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPostPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
