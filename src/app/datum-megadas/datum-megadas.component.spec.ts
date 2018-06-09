import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatumMegadasComponent } from './datum-megadas.component';

describe('DatumMegadasComponent', () => {
  let component: DatumMegadasComponent;
  let fixture: ComponentFixture<DatumMegadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatumMegadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatumMegadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
