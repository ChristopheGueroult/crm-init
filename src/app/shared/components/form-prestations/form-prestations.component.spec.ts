import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrestationsComponent } from './form-prestations.component';

describe('FormPrestationsComponent', () => {
  let component: FormPrestationsComponent;
  let fixture: ComponentFixture<FormPrestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
