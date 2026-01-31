import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PressComponent } from './press.component';

describe('PressComponent', () => {
  let component: PressComponent;
  let fixture: ComponentFixture<PressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
