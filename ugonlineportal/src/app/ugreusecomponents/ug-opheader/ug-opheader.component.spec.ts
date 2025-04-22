import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgOPHeaderComponent } from './ug-opheader.component';

describe('UgOPHeaderComponent', () => {
  let component: UgOPHeaderComponent;
  let fixture: ComponentFixture<UgOPHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UgOPHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgOPHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
