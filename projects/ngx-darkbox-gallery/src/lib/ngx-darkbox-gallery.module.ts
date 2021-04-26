import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDarkboxGalleryComponent } from './ngx-darkbox-gallery.component';
import { DarkboxComponent } from './components/darkbox/darkbox.component';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';

@NgModule({
  declarations: [
    NgxDarkboxGalleryComponent,
    DarkboxComponent,
    LoadingPlaceholderComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NgxDarkboxGalleryComponent
  ]
})
export class NgxDarkboxGalleryModule { }
