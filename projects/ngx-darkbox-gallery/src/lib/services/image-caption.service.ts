import { Injectable } from '@angular/core';
import { DarkboxComponent } from '../components/darkbox/darkbox.component';
import { DarkboxConfiguration } from '../model/darkbox-configuration';

@Injectable({
  providedIn: 'root'
})
export class ImageCaptionService {

  readonly templateVariables: string[] = ["${currentNumber}", "${totalNumber}", "${caption}"];

  constructor() { }

  /**
   * Replace the image caption template string with the actual values
   * @param darkboxConfiguration current darkbox configuration
   * @param currentNumer cnumber of the currently selected image within the gallery
   * @param totalNumber total number of images in the gallery
   * @param imageCaption caption of the selected image
   * @returns the formatted image caption
   */
  public getImageCaption(darkboxConfiguration: DarkboxConfiguration, currentNumer: number, totalNumber: number, imageCaption: string): string {
    const caption = darkboxConfiguration.captionTemplate;
    caption.replace("${currentNumber}", currentNumer.toString());
    caption.replace("${totalNumber}", totalNumber.toString());

    if (darkboxConfiguration.enableCaption) {
      caption.replace("${caption}", "");
    } else {
      caption.replace("${caption}", imageCaption);
    }
    return caption;
  }
}
