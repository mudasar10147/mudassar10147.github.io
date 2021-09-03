import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeASellerComponent } from './become-aseller.component';

describe('BecomeASellerComponent', () => {
  let component: BecomeASellerComponent;
  let fixture: ComponentFixture<BecomeASellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeASellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeASellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
