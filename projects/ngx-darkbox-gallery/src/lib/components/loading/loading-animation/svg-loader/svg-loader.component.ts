import { Component, Input, OnInit } from '@angular/core';
import { LoadingAnimation } from '../../../../model/darkbox-configuration';
import { NgIf } from '@angular/common';

@Component({
    selector: 'lib-svg-loader',
    templateUrl: './svg-loader.component.html',
    styleUrls: ['./svg-loader.component.scss'],
    imports: [NgIf]
})
export class SvgLoaderComponent implements OnInit {

  @Input()
  animationType: LoadingAnimation;

  loadingAnimation: typeof LoadingAnimation = LoadingAnimation;

  constructor() { }

  ngOnInit(): void {
  }
}
