import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DarkboxComponent } from './components/darkbox/darkbox.component';
import { DotComponent } from './components/loading/loading-animation/dot/dot.component';
import { FlexRingComponent } from './components/loading/loading-animation/flex-ring/flex-ring.component';
import { LoadingAnimationComponent } from './components/loading/loading-animation/loading-animation.component';
import { SvgLoaderComponent } from './components/loading/loading-animation/svg-loader/svg-loader.component';
import { LoadingPlaceholderComponent } from './components/loading/loading-placeholder/loading-placeholder.component';
import { TouchableDirective } from './directives/touchable/touchable.directive';
import { NgxDarkboxGalleryComponent } from './ngx-darkbox-gallery.component';

@NgModule({
  declarations: [
    NgxDarkboxGalleryComponent,
    DarkboxComponent,
    LoadingPlaceholderComponent,
    FlexRingComponent,
    DotComponent,
    SvgLoaderComponent,
    LoadingAnimationComponent,
    TouchableDirective
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NgxDarkboxGalleryComponent
  ],
})
export class NgxDarkboxGalleryModule { }
