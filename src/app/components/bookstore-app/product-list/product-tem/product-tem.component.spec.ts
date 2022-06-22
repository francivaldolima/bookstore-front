import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemComponent } from './product-tem.component';

describe('ProductTemComponent', () => {
  let component: ProductTemComponent;
  let fixture: ComponentFixture<ProductTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
