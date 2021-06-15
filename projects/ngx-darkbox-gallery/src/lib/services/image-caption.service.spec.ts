import { TestBed } from '@angular/core/testing';

import { ImageCaptionService } from './image-caption.service';

describe('ImageCaptionService', () => {
  let service: ImageCaptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageCaptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
