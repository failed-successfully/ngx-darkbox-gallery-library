export interface ResolutionConfiguration {
  /**
   * The minimum screen width this configuration applies to, up to the next higher resolution configuration
   */
  pxWidth: number;
  /**
   * The batch size scaling factor to be applied in the given configuration range
   */
  scalingFactor: number;
}
