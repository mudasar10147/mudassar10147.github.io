import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarButtonsComponent } from './nav-bar-buttons.component';

describe('NavBarButtonsComponent', () => {
  let component: NavBarButtonsComponent;
  let fixture: ComponentFixture<NavBarButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
