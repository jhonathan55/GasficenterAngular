import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponentB } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponentB;
  let fixture: ComponentFixture<CarouselComponentB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponentB],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponentB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
