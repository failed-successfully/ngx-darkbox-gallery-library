import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DarkboxConfiguration } from '../../model/darkbox-configuration';
import { Image } from '../../model/image';

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

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.close.emit(true);
  }

  onNext(): void {
    this.next.emit(true);
  }

  onPrev(): void {
    this.prev.emit(true);
  }

  onImageLoaded(): void {
    this.imageLoaded.emit(this.image);
  }
}
