import { Component, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Image } from 'dist/ngx-darkbox-gallery/lib/model/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: Image[] = [];

  darkModeEnabled: boolean;

  constructor(private renderer: Renderer2) {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    // Call the initialization with the OS default
    this.onDarkModeChanged(prefersDarkScheme.matches);
  }

  ngOnInit(): void {
    for (let i = 1; i <= 100; i++) {
      this.images.push({
        url: 'https://picsum.photos/seed/' + i + '/3000/2000',
        thumbnailUrl: 'https://picsum.photos/seed/' + i + '/300/200',
        caption: 'Image number ' + i + ' from https://picsum.photos/',
        altText: 'Random image number ' + i
      });
    }
  }

  /**
   * Function which enables/disables the dark mode
   * @param darkModeEnabled Whether the dark mode is enabled or not
   */
  onDarkModeChanged(darkModeEnabled: boolean): void {
    this.darkModeEnabled = darkModeEnabled;
    if (darkModeEnabled) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
