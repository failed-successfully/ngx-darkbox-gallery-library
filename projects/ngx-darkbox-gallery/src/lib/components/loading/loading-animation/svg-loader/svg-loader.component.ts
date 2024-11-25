import { Component, Input, OnInit } from '@angular/core';
import { LoadingAnimation } from '../../../../model/darkbox-configuration';

@Component({
    selector: 'lib-svg-loader',
    templateUrl: './svg-loader.component.html',
    styleUrls: ['./svg-loader.component.scss'],
    standalone: false
})
export class SvgLoaderComponent implements OnInit {

  @Input()
  animationType: LoadingAnimation;

  loadingAnimation: typeof LoadingAnimation = LoadingAnimation;

  constructor() { }

  ngOnInit(): void {
  }
}
