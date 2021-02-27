import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDarkboxGalleryComponent } from './ngx-darkbox-gallery.component';

describe('NgxDarkboxGalleryComponent', () => {
  let component: NgxDarkboxGalleryComponent;
  let fixture: ComponentFixture<NgxDarkboxGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDarkboxGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDarkboxGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
