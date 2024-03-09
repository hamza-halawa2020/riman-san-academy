import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouutUsComponent } from './abouut-us.component';

describe('AbouutUsComponent', () => {
  let component: AbouutUsComponent;
  let fixture: ComponentFixture<AbouutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbouutUsComponent]
    });
    fixture = TestBed.createComponent(AbouutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
