import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DarkboxComponent } from './components/darkbox/darkbox.component';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';
import { DotComponent } from './components/loading/dot/dot.component';
import { FlexRingComponent } from './components/loading/flex-ring/flex-ring.component';
import { NgxDarkboxGalleryComponent } from './ngx-darkbox-gallery.component';

@NgModule({
  declarations: [
    NgxDarkboxGalleryComponent,
    DarkboxComponent,
    LoadingPlaceholderComponent,
    FlexRingComponent,
    DotComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NgxDarkboxGalleryComponent
  ]
})
export class NgxDarkboxGalleryModule { }
