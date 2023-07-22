import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducdDetailesComponent } from './producd-detailes.component';

describe('ProducdDetailesComponent', () => {
  let component: ProducdDetailesComponent;
  let fixture: ComponentFixture<ProducdDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducdDetailesComponent]
    });
    fixture = TestBed.createComponent(ProducdDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
