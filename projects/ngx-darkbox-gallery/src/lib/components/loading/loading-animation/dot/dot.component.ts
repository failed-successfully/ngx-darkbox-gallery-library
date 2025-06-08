import { Component, Input, OnInit } from '@angular/core';
import { LoadingAnimation } from '../../../../model/darkbox-configuration';
import { NgClass } from '@angular/common';

@Component({
    selector: 'lib-dot',
    templateUrl: './dot.component.html',
    styleUrls: ['./dot.component.scss'],
    imports: [NgClass]
})
export class DotComponent implements OnInit {

  @Input()
  animationType: LoadingAnimation;

  loadingAnimation: typeof LoadingAnimation = LoadingAnimation;
  constructor() { }

  ngOnInit(): void {
  }
}
