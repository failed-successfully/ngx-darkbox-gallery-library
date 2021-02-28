import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDarkboxGalleryComponent } from './ngx-darkbox-gallery.component';
import { DarkboxComponent } from './components/darkbox/darkbox.component';

@NgModule({
  declarations: [
    NgxDarkboxGalleryComponent,
    DarkboxComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NgxDarkboxGalleryComponent
  ]
})
export class NgxDarkboxGalleryModule { }
