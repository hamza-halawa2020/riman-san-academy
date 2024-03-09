import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvilableCoursesComponent } from './avilable-courses.component';

describe('AvilableCoursesComponent', () => {
  let component: AvilableCoursesComponent;
  let fixture: ComponentFixture<AvilableCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvilableCoursesComponent]
    });
    fixture = TestBed.createComponent(AvilableCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
