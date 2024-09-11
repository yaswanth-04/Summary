import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAccountComponent } from './summary-account.component';

describe('SummaryAccountComponent', () => {
  let component: SummaryAccountComponent;
  let fixture: ComponentFixture<SummaryAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryAccountComponent]
    });
    fixture = TestBed.createComponent(SummaryAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
