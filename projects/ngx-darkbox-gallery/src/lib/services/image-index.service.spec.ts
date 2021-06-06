import { TestBed } from '@angular/core/testing';

import { ImageIndexService } from './image-index.service';

describe('ImageIndexService', () => {
  let service: ImageIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
