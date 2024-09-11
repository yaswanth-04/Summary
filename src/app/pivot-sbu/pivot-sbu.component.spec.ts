import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotSBUComponent } from './pivot-sbu.component';

describe('PivotSBUComponent', () => {
  let component: PivotSBUComponent;
  let fixture: ComponentFixture<PivotSBUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PivotSBUComponent]
    });
    fixture = TestBed.createComponent(PivotSBUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
