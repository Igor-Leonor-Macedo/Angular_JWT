import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManager } from './home-manager';

describe('HomeManager', () => {
  let component: HomeManager;
  let fixture: ComponentFixture<HomeManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
