import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmReusableComponent } from './frm-reusable.component';

describe('FrmReusableComponent', () => {
  let component: FrmReusableComponent;
  let fixture: ComponentFixture<FrmReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmReusableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrmReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
