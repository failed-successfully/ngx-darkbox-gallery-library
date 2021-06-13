import { ResolutionConfiguration } from "./resolution-configuration";

export interface GridConfiguration {
  /**
   * Number of images loaded initially on small and medium sized devices (smartphone / tablet)
   * This is scaled by a factor according to the resolution of bigger displays
   */
  initialBatchSize?: number;
  /**
   * The number of images loaded in each load more images call
   */
  batchSize?: number;

  /**
   * A list of scaling factors to be used to scale the initial batch size by screen width
   */
  batchSizeScalingFactors?: ResolutionConfiguration[];

  /**
   * Sets the type of the image grid
   * STATIC: A grid of images rendered in rows of dynamic length,
   *         preferrebly used for equal sized thumbnails (thumbnail size can be configured seperatly)
   * FLUID: A grid optimized for thumbnails with different aspect ratios and orientations,
   *        rendered in columns (if selected thumbnailHeight and thumbnailWidth are only used for placeholders while loading)
   */
  gridType?: GridType;

  /**
   * Allows for configuration of the flex property justifiy-content
   * All option of the css property justifiy-cotnent are allowed
   */
  thumbnailAlignment?: string | null;

  /**
   * Enables / Disables zooming effect for thumbnail hovering
   */
  zoomImages?: boolean;

  /**
   * Size used to define the height of the thumbnails and loading placeholders
   * For gridType FLUID this applies only to the loading placeholders
   * This should be defined like you would in css including the unit (e.g. px, em, rem)
   */
  thumbnailHeight?: string | null;

  /**
   * Size used to define the width of the thumbnails and loading placeholders
   * For gridType FLUID this applies only to the loading placeholders
   * This should be defined like you would in css including the unit (e.g. px, em, rem)
   */
  thumbnailWidth?: string | null;

  /**
   * Enables / Disables the shimmer placeholder while loading the thumbnail images
   */
  enableLoadingPlaceholder?: boolean;

  /**
   * Configures the behavior of the loading placeholders for thumbnail images.
   * If true, the thumbnails of a batch are shown, when all thumbnails of the batch are loaded.
   * If false, the thumbnail for each image is shown as soon as it gets available.
   *
   * This only takes effect if loading placeholders are enabled.
   */
  thumbnailsWaitForBatch?: boolean;
}

export enum GridType {
  STATIC = 'STATIC',
  FLUID = 'FLUID'
}
