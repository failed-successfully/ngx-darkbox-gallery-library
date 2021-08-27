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
   * @param imageCaption caption of the selected image
   * @returns the formatted image caption
   */
  public getImageCaption(darkboxConfiguration: DarkboxConfiguration, currentNumer: number, totalNumber: number, imageCaption: string): string {
    let caption = darkboxConfiguration.captionTemplate;
    if (!imageCaption) {
      caption = caption.replace('${caption}', '');
      caption = caption.replace('${separator}', '');
    } else {
      caption = caption.replace('${caption}', imageCaption);
      caption = caption.replace('${separator}', darkboxConfiguration.captionSeparator);
    }
    caption = caption.replace('${currentNumber}', currentNumer.toString());
    caption = caption.replace('${totalNumber}', totalNumber.toString());

    return caption;
  }
}
