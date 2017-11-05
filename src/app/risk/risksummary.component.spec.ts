import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksummaryComponent } from './risksummary.component';

describe('RisksummaryComponent', () => {
  let component: RisksummaryComponent;
  let fixture: ComponentFixture<RisksummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisksummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisksummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
