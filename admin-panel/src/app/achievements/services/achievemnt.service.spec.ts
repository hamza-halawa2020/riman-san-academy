import { TestBed } from '@angular/core/testing';

import { AchievemntService } from './achievemnt.service';

describe('AchievemntService', () => {
  let service: AchievemntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchievemntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
