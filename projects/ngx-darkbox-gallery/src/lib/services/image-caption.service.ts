import { Injectable } from '@angular/core';
import { DarkboxConfiguration } from '../model/darkbox-configuration';

@Injectable({
  providedIn: 'root'
})
export class ImageCaptionService {

  constructor() { }

  /**
   * Replace the image caption template string with the actual values
   * @param darkboxConfiguration current darkbox configuration
   * @param currentNumer number of the currently selected image within the gallery
   * @param totalNumber total number of images in the gallery
   * @param sepertor charackters between the image number and the caption. Is only shown when the caption is enabled
   * @param imageCaption caption of the selected image
   * @returns the formatted image caption
   */
  public getImageCaption(darkboxConfiguration: DarkboxConfiguration, currentNumer: number, totalNumber: number, sepertor: string, imageCaption: string): string {
    const caption = darkboxConfiguration.captionTemplate;
    if (darkboxConfiguration.enableCaption) {
      caption.replace("${caption}", "");
      caption.replace("${seperator}", "");
    } else {
      caption.replace("${caption}", imageCaption);
      caption.replace("${seperator}", sepertor);
    }
    caption.replace("${currentNumber}", currentNumer.toString());
    caption.replace("${totalNumber}", totalNumber.toString());

    return caption;
  }
}
