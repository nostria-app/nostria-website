import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSeedFundRaisedComponent } from './pre-seed-fund-raised.component';

describe('PreSeedFundRaisedComponent', () => {
  let component: PreSeedFundRaisedComponent;
  let fixture: ComponentFixture<PreSeedFundRaisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreSeedFundRaisedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreSeedFundRaisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
