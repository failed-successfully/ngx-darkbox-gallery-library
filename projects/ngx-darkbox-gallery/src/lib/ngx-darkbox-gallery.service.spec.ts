import { TestBed } from '@angular/core/testing';

import { NgxDarkboxGalleryService } from './ngx-darkbox-gallery.service';

describe('NgxDarkboxGalleryService', () => {
  let service: NgxDarkboxGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDarkboxGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
