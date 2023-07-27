import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcomponentComponent } from './allcomponent.component';

describe('AllcomponentComponent', () => {
  let component: AllcomponentComponent;
  let fixture: ComponentFixture<AllcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcomponentComponent]
    });
    fixture = TestBed.createComponent(AllcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
