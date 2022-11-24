import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParLabelComponent } from './recherche-par-label.component';

describe('RechercheParLabelComponent', () => {
  let component: RechercheParLabelComponent;
  let fixture: ComponentFixture<RechercheParLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
