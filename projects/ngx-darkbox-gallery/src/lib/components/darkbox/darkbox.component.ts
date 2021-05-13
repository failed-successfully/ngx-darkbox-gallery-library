import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DarkboxConfiguration } from '../../model/darkbox-configuration';
import { Image } from '../../model/image';

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
export class DarkboxComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.close.emit(true);
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

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
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
