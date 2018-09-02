import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApporteursComponent } from './list-apporteurs.component';

describe('ListApporteursComponent', () => {
  let component: ListApporteursComponent;
  let fixture: ComponentFixture<ListApporteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListApporteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApporteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
