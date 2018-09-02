import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApporteursComponent } from './apporteurs.component';

describe('ApporteursComponent', () => {
  let component: ApporteursComponent;
  let fixture: ComponentFixture<ApporteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApporteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApporteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
