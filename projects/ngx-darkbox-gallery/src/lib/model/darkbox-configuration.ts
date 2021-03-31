export interface DarkboxConfiguration {
  /**
   * Sets the direction the darkbox will allow looping through the images
   * FORWARD: Only after the last image the first one will be displayed again
   * BACKWARD: Only before the first image the last one will be displayed again
   * BOTH: The first image will be displayed after the last one and vise versa
   * NONE: There is a fixed end in both directions
   */
  loopDirection?: LoopDirection;
  /**
   * Sets if the caption should be displayed or not
   * true: Show the caption including the current position in the image set
   * false: Caption is not shown
   */
  enableCaption?: boolean;
}

export enum LoopDirection {
  FORWARD = 'FORWARD',
  BACKWARD = 'BACKWARD',
  BOTH = 'BOTH',
  NONE = 'NONE'
}
