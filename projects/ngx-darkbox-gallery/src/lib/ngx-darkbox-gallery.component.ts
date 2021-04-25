import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DefaultConfiguration } from './config/configuration.default';
import { Configuration } from './model/configuration';
import { LoopDirection } from './model/darkbox-configuration';
import { GridType } from './model/grid-configuration';
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
  currentImageIndex: number;

  @Input()
  configuration: Configuration;
  private defaultConfiguration: Configuration;
  effectiveConfiguration: Configuration;

  @Output()
  imageClicked = new EventEmitter<Image>();

  @Output()
  darkboxClosed = new EventEmitter<boolean>();

  @Output()
  darkboxNext = new EventEmitter<boolean>();

  @Output()
  darkboxPrev = new EventEmitter<boolean>();

  @Output()
  darkboxImageLoaded = new EventEmitter<Image>();

  constructor() { }

  ngOnInit(): void {
    this.initializeConfiguration(this.configuration);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.configuration) {
      this.initializeConfiguration(this.configuration);
    }
  }

  private initializeConfiguration(customConfiguration: Configuration): void {
    if (!this.defaultConfiguration) {
      this.defaultConfiguration = new DefaultConfiguration();
    }

    const effectiveImageConfig = {...this.defaultConfiguration.imageConfiguration, ...customConfiguration?.imageConfiguration};
    const effectiveGridConfig = {...this.defaultConfiguration.gridConfiguration, ...customConfiguration?.gridConfiguration};
    const effectiveDarkboxConfig = {...this.defaultConfiguration.darkboxConfiguration, ...customConfiguration?.darkboxConfiguration};
    this.effectiveConfiguration = {
      imageConfiguration: effectiveImageConfig,
      gridConfiguration: effectiveGridConfig,
      darkboxConfiguration: effectiveDarkboxConfig
    } as Configuration;

    this.scaleInitialBatchSize();
    this.imageCount = this.effectiveConfiguration.gridConfiguration.initialBatchSize;
  }

  onImageClicked(image: Image): void {
    this.currentImageIndex = this.images.indexOf(image);
    this.imageClicked.emit(image);
  }

  onDarkboxClose(): void {
    this.currentImageIndex = null;
    this.darkboxClosed.emit(true);
  }

  onDarkboxNextImage(): void {
    this.currentImageIndex = this.calculateValidImageIndex(true);
    this.darkboxNext.emit(true);
  }

  onDarkboxPrevImage(): void {
    this.currentImageIndex = this.calculateValidImageIndex(false);
    this.darkboxPrev.emit(true);
  }

  onDarkboxImageLoaded(image: Image): void {
    this.darkboxImageLoaded.emit(image);
  }

  isNextImageAvailable(): boolean {
    const loopDirection = this.effectiveConfiguration.darkboxConfiguration.loopDirection;
    return this.currentImageIndex + 1 < this.images.length || loopDirection == LoopDirection.FORWARD || loopDirection == LoopDirection.BOTH;
  }

  isPrevImageAvailable(): boolean {
    const loopDirection = this.effectiveConfiguration.darkboxConfiguration.loopDirection;
    return this.currentImageIndex - 1 >= 0 || loopDirection == LoopDirection.BACKWARD || loopDirection == LoopDirection.BOTH;
  }

  /**
   * Calculates the next valid image index based on the currentImageIndex and the images array
   * @param increase true if the index should be increased, false otherwise
   * @return the new index
   */
  private calculateValidImageIndex(increase: boolean): number {
    const loopDirection = this.effectiveConfiguration.darkboxConfiguration.loopDirection;
    const addend = increase ? 1 : -1;
    const targetIndex = this.currentImageIndex + addend;
    const maxImageIndex = this.images.length - 1;

    if (targetIndex >= 0 && targetIndex <= maxImageIndex) {

      // If the currently viewed image is not the list of displayed images in the grid, the next batch is loaded
      if (targetIndex >= this.imageCount) {
        this.imageCount += this.effectiveConfiguration.gridConfiguration.batchSize;
        if (this.imageCount > this.images.length) {
          this.imageCount = this.images.length;
        }
      }

      return this.currentImageIndex + addend;
    }

    if (loopDirection !== LoopDirection.NONE) {
      if (targetIndex > maxImageIndex && (loopDirection === LoopDirection.FORWARD || loopDirection === LoopDirection.BOTH)) {
        return 0;
      }

      if (targetIndex < 0 && (loopDirection === LoopDirection.BACKWARD || loopDirection === LoopDirection.BOTH)) {
        // If we rollover to the back, make sure all images are displayed in the grid
        this.imageCount = this.images.length;
        return maxImageIndex;
      }
    }

    return this.currentImageIndex;
  }

  /**
   * Calculates the correct initial number of images based on the screen resolution
   */
  private scaleInitialBatchSize(): void {
    const windowWidth = window.screen.width;
    const scalingFactors = this.effectiveConfiguration.gridConfiguration.batchSizeScalingFactors;
    scalingFactors.sort((a, b) => b.pxWidth - a.pxWidth);

    const factor = scalingFactors.find(currentFactor => windowWidth >= currentFactor.pxWidth);

    this.effectiveConfiguration.gridConfiguration.initialBatchSize *= factor ? factor.scalingFactor : 1;
  }

  /**
   * Compiles the css classes needed to reflect the configuration of the image-grid
   * @returns a string of css class names for the main image grid
   */
  public getImageGridClasses(): string {
    const classConfig = [];

    if (this.effectiveConfiguration.gridConfiguration.gridType === GridType.STATIC) {
      classConfig.push('static-image-grid');
    }

    if (this.effectiveConfiguration.gridConfiguration.gridType === GridType.FLUID) {
      classConfig.push('fluid-image-grid');
    }

    if (this.effectiveConfiguration.gridConfiguration.zoomImages) {
      classConfig.push('zooming-images');
    }

    return classConfig.join(' ');
  }

  /**
   * Returns the configuration parameter for content justification in the main image grid
   * @returns a string for the justifiy-content css property
   */
  public getContentJustification(): string | null {
    return this.effectiveConfiguration.gridConfiguration.thumbnailAlignment;
  }

  /**
   * @returns the thumbnail height from the configuration
   */
  public getThumbnailHeight(): string | null {
    return this.effectiveConfiguration.gridConfiguration.thumbnailHeight;
  }

  /**
   * @returns the thumbnail width from the configuration
   */
  public getThumbnailWidth(): string | null {
    return this.effectiveConfiguration.gridConfiguration.thumbnailWidth;
  }
}
