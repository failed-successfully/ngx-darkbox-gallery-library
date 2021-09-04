import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { SwipeDirection } from './swipe-direction';

@Directive({
  selector: '[touchable]'
})
export class TouchableDirective {

  @Output()
  swipe = new EventEmitter<SwipeDirection>();

  private touchStartX;
  private touchStartY;
  private touchEndX;
  private touchEndY;

  constructor() { }

  /**
   * Event listener for touchstart events
   * @param event Touch event
   */
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
  }

  /**
   * Event listener for touchend events
   * @param event Touch event
   */
  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.touchEndY = event.changedTouches[0].screenY;
    this.handleGesture();
  }

  /**
   * Handler for all gestures
   */
  private handleGesture(): void {
    // Swipe to the left
    if (this.touchEndX < this.touchStartX) {
      this.swipe.emit(SwipeDirection.LEFT);
    }

    // Swipe to the right
    if (this.touchEndX > this.touchStartX) {
      this.swipe.emit(SwipeDirection.RIGHT);
    }

    // Swipe up
    if (this.touchEndY < this.touchStartY) {
      this.swipe.emit(SwipeDirection.UP);
    }

    // Swipe down
    if (this.touchEndY > this.touchStartY) {
      this.swipe.emit(SwipeDirection.DOWN);
    }
  }
}
