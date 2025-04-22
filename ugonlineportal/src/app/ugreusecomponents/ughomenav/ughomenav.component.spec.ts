import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UghomenavComponent } from './ughomenav.component';

describe('UghomenavComponent', () => {
  let component: UghomenavComponent;
  let fixture: ComponentFixture<UghomenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UghomenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UghomenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
