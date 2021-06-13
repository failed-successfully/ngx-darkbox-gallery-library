import { ColorConfiguration } from "./color-configuration";

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

  /**
   * Loading animation shown while the full sized image is loading
   * DOT: A line of jumping dots moving in a wave like form
   * BAR: Three vertical bars getting wider and smaller
   * FLEX_RING: A ring flexing in and out
   * SPINNER: A classical spinner animation turning infinitely
   * SQUARE: A line of jumping squares moving in a wave like form
   */
  loadingAnimation?: LoadingAnimation;

  /**
   * The button style to use for the close button
   * FAB: A round floating action button in the top right corner of the screen
   * BAR: A horizontal bar at the top of the screen
   */
  closeButtonStyle?: ButtonStyle;

  closeButtonColorConfiguration?: ColorConfiguration;

  /**
   * The button style to use for the previous and next buttons
   */
  prevNextButtonStyle?: ButtonStyle;

  /**
   * The button style to use for the previous and next buttons
   * FAB: A round floating action button placed to the left and right of the image and vertically in the center of the screen
   * BAR: A vertical bar to the left and right of the image
   */
  prevNextButtonColorConfiguration?: ColorConfiguration;
}

export enum LoopDirection {
  FORWARD = 'FORWARD',
  BACKWARD = 'BACKWARD',
  BOTH = 'BOTH',
  NONE = 'NONE'
}

export enum LoadingAnimation {
  DOT,
  BAR,
  FLEX_RING,
  SPINNER,
  SQUARE
}

export enum ButtonStyle {
  FAB,
  BAR
}
