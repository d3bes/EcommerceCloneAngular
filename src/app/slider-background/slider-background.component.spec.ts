import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBackgroundComponent } from './slider-background.component';

describe('SliderBackgroundComponent', () => {
  let component: SliderBackgroundComponent;
  let fixture: ComponentFixture<SliderBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderBackgroundComponent]
    });
    fixture = TestBed.createComponent(SliderBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
