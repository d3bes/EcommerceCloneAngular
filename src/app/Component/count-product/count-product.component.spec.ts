import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountProductComponent } from './count-product.component';

describe('CountProductComponent', () => {
  let component: CountProductComponent;
  let fixture: ComponentFixture<CountProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountProductComponent]
    });
    fixture = TestBed.createComponent(CountProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
