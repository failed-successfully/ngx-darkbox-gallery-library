import { ColorConfiguration } from '../model/color-configuration';
import { ButtonStyle, DarkboxConfiguration, LoadingAnimation, LoopDirection } from '../model/darkbox-configuration';

export class DefaultDarkboxConfiguration implements DarkboxConfiguration {
  loopDirection = LoopDirection.BOTH;
  enableCaption = true;
  loadingAnimation = LoadingAnimation.SPINNER;
  closeButtonStyle = ButtonStyle.FAB;
  closeButtonColorConfiguration = {
    backgroundColor: '#FFFFFF',
    foregroundColor: '#000000'
  } as ColorConfiguration;
  prevNextButtonStyle = ButtonStyle.FAB;
  prevNextButtonColorConfiguration = {
    backgroundColor: '#FFFFFF',
    foregroundColor: '#000000'
  } as ColorConfiguration;
  captionTemplate = '${currentNumber}/${totalNumber} - ${caption}';
}
