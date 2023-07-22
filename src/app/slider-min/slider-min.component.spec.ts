import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMinComponent } from './slider-min.component';

describe('SliderMinComponent', () => {
  let component: SliderMinComponent;
  let fixture: ComponentFixture<SliderMinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderMinComponent]
    });
    fixture = TestBed.createComponent(SliderMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
