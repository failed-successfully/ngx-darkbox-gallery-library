import { GridConfiguration } from "../model/grid-configuration";

export class DefaultGridConfiguration implements GridConfiguration {
  initialBatchSize = 10;
  batchSize = 15;
  batchSizeScalingFactors = [
    {
      pxWidth: 1400,
      scalingFactor: 5
    },
    {
      pxWidth: 992,
      scalingFactor: 2
    }
  ]
}
