import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesMobileComponent } from './our-services-mobile.component';

describe('OurServicesMobileComponent', () => {
  let component: OurServicesMobileComponent;
  let fixture: ComponentFixture<OurServicesMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurServicesMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
