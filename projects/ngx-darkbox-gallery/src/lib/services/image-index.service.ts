import { Injectable } from '@angular/core';
import { Configuration } from '../model/configuration';
import { LoopDirection } from '../model/darkbox-configuration';

@Injectable({
  providedIn: 'root'
})
export class ImageIndexService {

  constructor() { }

  /**
 * Calculates the next valid image index based on the currentImageIndex and the images array
 * @param configuration currently used for the Darkbox instance
 * @param currentIndex of the image being displayed
 * @param totalImageCount number of total images provided to Darkbox
 * @param increase true if the index should be increased, false otherwise
 * @return the new index
 */
  public calculateValidImageIndex(configuration: Configuration, currentIndex: number, totalImageCount: number, increase: boolean): number {
    const loopDirection = configuration.darkboxConfiguration.loopDirection;
    const addend = increase ? 1 : -1;
    const targetIndex = currentIndex + addend;
    const maxImageIndex = totalImageCount - 1;

    if (targetIndex >= 0 && targetIndex <= maxImageIndex) {
      return targetIndex;
    }

    if (loopDirection !== LoopDirection.NONE) {
      if (targetIndex > maxImageIndex && (loopDirection === LoopDirection.FORWARD || loopDirection === LoopDirection.BOTH)) {
        return 0;
      }

      if (targetIndex < 0 && (loopDirection === LoopDirection.BACKWARD || loopDirection === LoopDirection.BOTH)) {
        // If we rollover to the back, make sure all images are displayed in the grid
        return maxImageIndex;
      }
    }
    return currentIndex;
  }
}
