import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishListComponent } from './whish-list.component';

describe('WhishListComponent', () => {
  let component: WhishListComponent;
  let fixture: ComponentFixture<WhishListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhishListComponent]
    });
    fixture = TestBed.createComponent(WhishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
