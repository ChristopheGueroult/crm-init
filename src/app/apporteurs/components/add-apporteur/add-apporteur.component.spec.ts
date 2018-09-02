import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApporteurComponent } from './add-apporteur.component';

describe('AddApporteurComponent', () => {
  let component: AddApporteurComponent;
  let fixture: ComponentFixture<AddApporteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApporteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
