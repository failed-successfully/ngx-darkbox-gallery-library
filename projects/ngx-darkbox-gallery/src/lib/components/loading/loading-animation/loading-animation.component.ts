import { Component, Input, OnInit } from '@angular/core';
import { LoadingAnimation } from '../../../model/darkbox-configuration';

@Component({
  selector: 'lib-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.css']
})
export class LoadingAnimationComponent implements OnInit {

  @Input()
  isLoading: boolean;

  @Input()
  animationType: LoadingAnimation;

  constructor() { }

  ngOnInit(): void {
  }
}
