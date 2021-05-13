import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DarkboxComponent } from './components/darkbox/darkbox.component';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';
import { DotComponent } from './components/loading/loading-animation/dot/dot.component';
import { FlexRingComponent } from './components/loading/loading-animation/flex-ring/flex-ring.component';
import { SvgLoaderComponent } from './components/loading/loading-animation/svg-loader/svg-loader.component';
import { NgxDarkboxGalleryComponent } from './ngx-darkbox-gallery.component';
import { LoadingAnimationComponent } from './components/loading/loading-animation/loading-animation.component';

@NgModule({
  declarations: [
    NgxDarkboxGalleryComponent,
    DarkboxComponent,
    LoadingPlaceholderComponent,
    FlexRingComponent,
    DotComponent,
    SvgLoaderComponent,
    LoadingAnimationComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NgxDarkboxGalleryComponent
  ]
})
export class NgxDarkboxGalleryModule { }
