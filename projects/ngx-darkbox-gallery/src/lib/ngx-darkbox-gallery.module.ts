import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { DarkboxComponent } from './components/darkbox/darkbox.component';
import { LoadingPlaceholderComponent } from './components/loading/loading-placeholder/loading-placeholder.component';
import { DotComponent } from './components/loading/loading-animation/dot/dot.component';
import { FlexRingComponent } from './components/loading/loading-animation/flex-ring/flex-ring.component';
import { SvgLoaderComponent } from './components/loading/loading-animation/svg-loader/svg-loader.component';
import { NgxDarkboxGalleryComponent } from './ngx-darkbox-gallery.component';
import { LoadingAnimationComponent } from './components/loading/loading-animation/loading-animation.component';

import * as Hammer from 'hammerjs';
export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL }
  };
}

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
    HammerModule,
  ],
  exports: [
    NgxDarkboxGalleryComponent
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
  ]
})
export class NgxDarkboxGalleryModule { }
