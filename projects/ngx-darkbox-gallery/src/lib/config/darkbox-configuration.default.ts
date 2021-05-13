import { DarkboxConfiguration, LoadingAnimation, LoopDirection } from '../model/darkbox-configuration';

export class DefaultDarkboxConfiguration implements DarkboxConfiguration {
  loopDirection = LoopDirection.BOTH;
  enableCaption = true;
  loadingAnimation = LoadingAnimation.SPINNER;
}
