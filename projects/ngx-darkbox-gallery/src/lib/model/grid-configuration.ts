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
}
