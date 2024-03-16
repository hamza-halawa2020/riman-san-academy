import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditedCertificatesComponent } from './accredited-certificates.component';

describe('AccreditedCertificatesComponent', () => {
  let component: AccreditedCertificatesComponent;
  let fixture: ComponentFixture<AccreditedCertificatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccreditedCertificatesComponent]
    });
    fixture = TestBed.createComponent(AccreditedCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
