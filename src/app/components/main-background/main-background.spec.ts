import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBackground } from './main-background';

describe('MainBackground', () => {
  let component: MainBackground;
  let fixture: ComponentFixture<MainBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
