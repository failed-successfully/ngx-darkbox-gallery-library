export interface DarkboxConfiguration {
  /**
   * Sets the direction the darkbox will allow looping through the images
   * FORWARD: Only after the last image the first will be displayed again
   * BACKWARD: Only before the first image the last will be displayed again
   * BOTH: The first image will be displayed after the last and vise versa
   * NONE: There is a fixed end in both directions
   */
  loopDirection: LoopDirection;
}

export enum LoopDirection {
  FORWARD = 'FORWARD',
  BACKWARD = 'BACKWARD',
  BOTH = 'BOTH',
  NONE = 'NONE'
}
