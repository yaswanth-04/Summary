import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryEDPComponent } from './summary-edp.component';

describe('SummaryEDPComponent', () => {
  let component: SummaryEDPComponent;
  let fixture: ComponentFixture<SummaryEDPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryEDPComponent]
    });
    fixture = TestBed.createComponent(SummaryEDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
