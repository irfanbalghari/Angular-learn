import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCancelButtonComponent } from './app-cancel-button.component';

describe('AppCancelButtonComponent', () => {
  let component: AppCancelButtonComponent;
  let fixture: ComponentFixture<AppCancelButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppCancelButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCancelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
