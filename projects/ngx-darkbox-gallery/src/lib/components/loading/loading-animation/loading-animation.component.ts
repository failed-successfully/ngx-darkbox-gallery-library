import { Component, Input, OnInit } from '@angular/core';
import { LoadingAnimation } from '../../../model/darkbox-configuration';

@Component({
  selector: 'lib-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.scss']
})
export class LoadingAnimationComponent implements OnInit {

  @Input()
  animationType: LoadingAnimation;

  loadingAnimation: typeof LoadingAnimation = LoadingAnimation;

  constructor() { }

  ngOnInit(): void {
  }
}
