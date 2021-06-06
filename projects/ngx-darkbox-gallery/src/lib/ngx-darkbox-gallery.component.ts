import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Configuration } from './model/configuration';
import { LoopDirection } from './model/darkbox-configuration';
import { GridType } from './model/grid-configuration';
import { Image } from './model/image';
import { ConfigurationService } from './services/configuration.service';
import { ImageIndexService } from './services/image-index.service';

@Component({
  selector: 'darkbox-gallery',
  templateUrl: './ngx-darkbox-gallery.component.html',
  styleUrls: ['./ngx-darkbox-gallery.component.scss']
})
export class NgxDarkboxGalleryComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  /**
   * List of images displayed in Darkbox
   */
  images: Image[] = [];
  imageCount: number;
  currentImageIndex: number;
  private loadedImageCount = 0;

  @Input()
  configuration: Configuration;
  effectiveConfiguration: Configuration;

  private eventsSubscription: Subscription;
  /**
   * Input to handle click events from the outside world
   */
  @Input()
  loadMoreImagesEvents: Observable<void>;

  batchThumbnailsLoaded = false;

  /**
   * Signals that a single image was clicked
   * The clicked images is being emitted
   */
  @Output()
  imageClicked = new EventEmitter<Image>();

  /**
   * Signals that a single thumbnail was loaded
   * The image containing the thumbnail is being emitted
   */
  @Output()
  thumbnailLoaded = new EventEmitter<Image>();

  /**
   * Signals that all thumbnails currently displayed have bean loaded
   */
  @Output()
  allThumbnailsLoaded = new EventEmitter<boolean>();

  /**
   * Signals that all images provided from the input are displayed in the DOM
   * This does not mean that all thumbnails/images are completely loaded
   */
  @Output()
  allImagesInDom = new EventEmitter<boolean>();

  /**
   * Signals that the lightbox/Darkbox was closed by the user
   */
  @Output()
  darkboxClosed = new EventEmitter<boolean>();

  /**
   * Signals that the user clicked the next image button
   */
  @Output()
  darkboxNext = new EventEmitter<boolean>();

  /**
   * Signals that the user clicked the previous image button
   */
  @Output()
  darkboxPrev = new EventEmitter<boolean>();

  /**
   * Signals that the full sized images was loaded
   * The loaded images is being emitted
   */
  @Output()
  darkboxImageLoaded = new EventEmitter<Image>();

  constructor(private configurationService: ConfigurationService,
    private imageIndexService: ImageIndexService) { }

  ngOnInit(): void {
    this.initializeConfiguration(this.configuration);
    this.subscribeToOutsideClickEvents();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.configuration) {
      this.initializeConfiguration(this.configuration);
    }
    if (changes.loadMoreImagesEvents) {
      this.subscribeToOutsideClickEvents();
    }
  }

  ngOnDestroy(): void {
    if (this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
    }
  }

  private initializeConfiguration(customConfiguration: Configuration): void {
    this.effectiveConfiguration = this.configurationService.getEffectiveConfiguration(customConfiguration);
    this.scaleInitialBatchSize();
    this.imageCount = this.effectiveConfiguration.gridConfiguration.initialBatchSize;
  }

  private subscribeToOutsideClickEvents(): void {
    if (this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
    }
    if (this.loadMoreImagesEvents) {
      this.eventsSubscription = this.loadMoreImagesEvents.subscribe(() => this.showMoreImages());
    }
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

  /**
   * Event emitter signaling that one image is loaded
   * Additionally signals that all images of one batch are loaded
   */
  onThumbnailLoaded(image: Image): void {
    this.loadedImageCount++;
    this.thumbnailLoaded.emit(image);
    if (this.loadedImageCount >= this.imageCount) {
      this.batchThumbnailsLoaded = true;
      this.allThumbnailsLoaded.emit(true);
    }
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
    const newImageIndex = this.imageIndexService.calculateValidImageIndex(this.effectiveConfiguration, this.currentImageIndex, this.images.length, increase);
    const rollOverRequired = newImageIndex === this.images.length -1 && this.imageCount < this.images.length;

    // Roll over to the last image when the image before the first one is requested
    if (rollOverRequired) {
      this.showMoreImages(true);
    }

    if (newImageIndex >= this.imageCount && !rollOverRequired) {
      this.showMoreImages();
    }
    return newImageIndex;
  }

  /**
   * Increase the imageCount and thereby increase the number of displayed thumbnails/images
   * @param showAllImages If true all thumbnails/images are displayed
   */
  private showMoreImages(showAllImages: boolean = false): void {
    this.imageCount += this.effectiveConfiguration.gridConfiguration.batchSize;

    if (showAllImages) {
      this.imageCount = this.images.length;
    }

    this.batchThumbnailsLoaded = false;
    if (this.imageCount >= this.images.length) {
      this.allImagesInDom.emit(true);
      this.imageCount = this.images.length;
    }
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
   * @param isPlaceholder whether the size is calculated for a placeholder or not
   * @returns the thumbnail height from the configuration
   */
  public getThumbnailHeight(isPlaceholder: boolean = false): string | null {
    // Check for the fluid style
    if (this.effectiveConfiguration.gridConfiguration.gridType === GridType.FLUID && !isPlaceholder) {
      return null;
    }
    return this.effectiveConfiguration.gridConfiguration.thumbnailHeight;
  }

  /**
   * @param isPlaceholder whether the size is calculated for a placeholder or not
   * @returns the thumbnail width from the configuration
   */
  public getThumbnailWidth(isPlaceholder: boolean = false): string | null {
    // Check for the fluid style
    if (this.effectiveConfiguration.gridConfiguration.gridType === GridType.FLUID && !isPlaceholder) {
      return null;
    }
    return this.effectiveConfiguration.gridConfiguration.thumbnailWidth;
  }

  public isLoadingPlaceholderEnabled(): boolean {
    return this.effectiveConfiguration.gridConfiguration?.enableLoadingPlaceholder;
  }
}
