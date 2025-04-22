import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagelayoutComponent } from './homepagelayout.component';

describe('HomepagelayoutComponent', () => {
  let component: HomepagelayoutComponent;
  let fixture: ComponentFixture<HomepagelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepagelayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
