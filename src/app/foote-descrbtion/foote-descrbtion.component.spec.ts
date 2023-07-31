import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteDescrbtionComponent } from './foote-descrbtion.component';

describe('FooteDescrbtionComponent', () => {
  let component: FooteDescrbtionComponent;
  let fixture: ComponentFixture<FooteDescrbtionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooteDescrbtionComponent]
    });
    fixture = TestBed.createComponent(FooteDescrbtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
