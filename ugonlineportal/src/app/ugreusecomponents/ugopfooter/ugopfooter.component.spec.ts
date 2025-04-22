import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgopfooterComponent } from './ugopfooter.component';

describe('UgopfooterComponent', () => {
  let component: UgopfooterComponent;
  let fixture: ComponentFixture<UgopfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UgopfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgopfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
