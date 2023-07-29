import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgeNavComponent } from './imge-nav.component';

describe('ImgeNavComponent', () => {
  let component: ImgeNavComponent;
  let fixture: ComponentFixture<ImgeNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgeNavComponent]
    });
    fixture = TestBed.createComponent(ImgeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
