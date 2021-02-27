import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DefaultConfiguration } from './config/configuration.default';
import { Configuration } from './model/configuration';
import { Image } from './model/image';

@Component({
  selector: 'darkbox-gallery',
  templateUrl: './ngx-darkbox-gallery.component.html',
  styleUrls: ['./ngx-darkbox-gallery.component.scss']
})
export class NgxDarkboxGalleryComponent implements OnInit, OnChanges {

  @Input()
  images: Image[] = [];
  imageCount: number;

  @Input()
  configuration: Configuration;
  private defaultConfiguration: Configuration;
  effectiveConfiguration: Configuration;

  constructor() { }

  ngOnInit(): void {
    this.defaultConfiguration = new DefaultConfiguration();
    this.initializeConfiguration(null);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.configuration) {
      this.initializeConfiguration(changes.configuration as Configuration);
    }
  }

  private initializeConfiguration(customConfiguration: Configuration) {
    this.effectiveConfiguration = {...this.defaultConfiguration, ...customConfiguration};
    this.scaleInitialBatchSize();
    this.imageCount = this.effectiveConfiguration.gridConfiguration.initialBatchSize;
  }

  /**
   * Calculates the correct initial number of images based on the screen resolution
   */
  private scaleInitialBatchSize(): void {
    const windowWidth = window.screen.width;
    const scalingFactors = this.effectiveConfiguration.gridConfiguration.batchSizeScalingFactors;
    scalingFactors.sort((a, b) => b.pxWidth - a.pxWidth);

    const factor = scalingFactors.find(factor => windowWidth >= factor.pxWidth);

    this.effectiveConfiguration.gridConfiguration.initialBatchSize *= factor ? factor.scalingFactor : 1;
    console.log(this.effectiveConfiguration);
  }

}
