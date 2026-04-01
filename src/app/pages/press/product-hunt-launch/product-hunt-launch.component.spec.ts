import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ProductHuntLaunchComponent } from './product-hunt-launch.component';

describe('ProductHuntLaunchComponent', () => {
  let component: ProductHuntLaunchComponent;
  let fixture: ComponentFixture<ProductHuntLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHuntLaunchComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductHuntLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});