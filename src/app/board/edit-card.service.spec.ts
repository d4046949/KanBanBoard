import { TestBed } from '@angular/core/testing';

import { EditCardService } from './edit-card.service';

describe('EditCardService', () => {
  let service: EditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
