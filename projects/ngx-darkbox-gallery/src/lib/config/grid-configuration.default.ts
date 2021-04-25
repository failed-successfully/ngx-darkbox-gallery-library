import { GridConfiguration, GridType } from '../model/grid-configuration';

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
  ];
  gridType = GridType.STATIC;
  thumbnailAlignment = 'flex-start';
  zoomImages = true;
  thumbnailHeight = '175px';
  thumbnailWidth = '175px';
}
