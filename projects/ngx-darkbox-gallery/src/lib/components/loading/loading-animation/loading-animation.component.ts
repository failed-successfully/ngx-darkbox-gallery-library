import { Component, Input, OnInit } from '@angular/core';
import { LoadingAnimation } from '../../../model/darkbox-configuration';
import { NgIf } from '@angular/common';
import { DotComponent } from './dot/dot.component';
import { FlexRingComponent } from './flex-ring/flex-ring.component';
import { SvgLoaderComponent } from './svg-loader/svg-loader.component';

@Component({
    selector: 'lib-loading-animation',
    templateUrl: './loading-animation.component.html',
    styleUrls: ['./loading-animation.component.scss'],
    imports: [NgIf, DotComponent, FlexRingComponent, SvgLoaderComponent]
})
export class LoadingAnimationComponent implements OnInit {

  @Input()
  animationType: LoadingAnimation;

  loadingAnimation: typeof LoadingAnimation = LoadingAnimation;

  constructor() { }

  ngOnInit(): void {
  }
}
