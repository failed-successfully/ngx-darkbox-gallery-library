import { Component, OnInit, Renderer2 } from '@angular/core';
import { Image } from 'dist/ngx-darkbox-gallery/lib/model/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: Image[] = [];

  darkModeEnabled: boolean;

  constructor(renderer: Renderer2) {
    // Check for the default setting from the OS
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      renderer.addClass(document.body, 'dark-theme');
    } else {
      renderer.removeClass(document.body, 'dark-theme');
    }
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
}
