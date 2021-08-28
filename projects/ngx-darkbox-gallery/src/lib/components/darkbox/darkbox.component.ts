import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SwipeDirection } from '../../directives/touchable/swipe-direction';
import { ButtonStyle, DarkboxConfiguration } from '../../model/darkbox-configuration';
import { Image } from '../../model/image';
import { ImageCaptionService } from '../../services/image-caption.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  ESCAPE = 27
}

@Component({
  selector: 'darkbox',
  templateUrl: './darkbox.component.html',
  styleUrls: ['./darkbox.component.scss']
})
export class DarkboxComponent implements OnInit, OnChanges {

  @Input()
  image: Image;

  @Input()
  darkboxConfiguration: DarkboxConfiguration;

  @Input()
  currentNumber: number;

  @Input()
  totalNumber: number;

  @Input()
  hasNext: boolean;

  @Input()
  hasPrev: boolean;

  @Output()
  close = new EventEmitter<boolean>();

  @Output()
  next = new EventEmitter<boolean>();

  @Output()
  prev = new EventEmitter<boolean>();

  @Output()
  imageLoaded = new EventEmitter<Image>();

  /**
   * Loading state holder for the full sized image
   */
  fullSizedImageLoaded = false;

  /**
   * Interpolated image caption
   */
  imageCaption: string;

  constructor(private imageCaptionService: ImageCaptionService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentNumber) {
      this.imageCaption = this.imageCaptionService.getImageCaption(this.darkboxConfiguration, this.currentNumber, this.totalNumber, this.image.caption);
    }
  }

  onClose(): void {
    this.close.emit(true);
  }

  /**
   * Handle swipe interactions
   * @param event
   */
  onSwipe(event: SwipeDirection): void {
    if (event === SwipeDirection.LEFT) {
      this.onNext();
    }
    if (event === SwipeDirection.RIGHT) {
      this.onPrev();
    }
  }

  onNext(): void {
    this.fullSizedImageLoaded = false;
    this.next.emit(true);
  }

  onPrev(): void {
    this.fullSizedImageLoaded = false;
    this.prev.emit(true);
  }

  onImageLoaded(): void {
    this.fullSizedImageLoaded = true;
    this.imageLoaded.emit(this.image);
  }

  getCloseButtonStyle(): string {
    if (this.darkboxConfiguration.closeButtonStyle === ButtonStyle.FAB) {
      return 'fab';
    }

    if (this.darkboxConfiguration.closeButtonStyle === ButtonStyle.BAR) {
      return 'bar';
    }
  }

  getPrevNextButtonStyle(): string {
    if (this.darkboxConfiguration.prevNextButtonStyle === ButtonStyle.FAB) {
      return 'fab';
    }

    if (this.darkboxConfiguration.prevNextButtonStyle === ButtonStyle.BAR) {
      return 'bar';
    }
  }

  getCloseButtonBackgroundColor(): string {
    return this.darkboxConfiguration.closeButtonColorConfiguration.backgroundColor;
  }

  getCloseButtonForegroundColor(): string {
    return this.darkboxConfiguration.closeButtonColorConfiguration.foregroundColor;
  }

  getPrevNextButtonBackgroundColor(): string {
    return this.darkboxConfiguration.prevNextButtonColorConfiguration.backgroundColor;
  }

  getPrevNextButtonForegroundColor(): string {
    return this.darkboxConfiguration.prevNextButtonColorConfiguration.foregroundColor;
  }

  getCaptionBackgroundColor(): string {
    return this.darkboxConfiguration.captionColorConfiguration.backgroundColor;
  }

  getCaptionForegroundColor(): string {
    return this.darkboxConfiguration.captionColorConfiguration.foregroundColor;
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    let code: string | number;
    if (event.key !== undefined) {
      code = event.key;
    } else if (event.keyCode !== undefined) {
      code = event.keyCode;
    }

    if (this.hasNext && (code === 'ArrowRight' || code === KEY_CODE.RIGHT_ARROW)) {
      this.onNext();
    }

    if (this.hasPrev && (code === 'ArrowLeft' || code === KEY_CODE.LEFT_ARROW)) {
      this.onPrev();
    }

    if (code === 'Escape' || code === KEY_CODE.ESCAPE) {
      this.onClose();
    }
  }
}
