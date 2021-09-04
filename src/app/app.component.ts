import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from 'dist/ngx-darkbox-gallery/lib/model/image';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: Image[] = [];

  eventsSubject: Subject<void> = new Subject<void>();

  areMoreImagesAvailable: boolean = true;

  // Constructor is required here to load the svg images into angular material
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Initialize svg icons
    const svgIcons = [
      'darkbox-icon',
      'github-icon',
      'npm-icon',
    ];

    svgIcons.forEach((svgIcon: string) =>
      iconRegistry.addSvgIcon(svgIcon, sanitizer.bypassSecurityTrustResourceUrl('assets/' + svgIcon + '.svg'))
    );
  }

  ngOnInit(): void {
    const shortSide = 2000;
    const longSide = 3750;
    // Populate the demo page with sample images
    for (let i = 1; i <= 100; i++) {
      let firstSide = longSide;
      let secondSide = shortSide;
      // Set every second image to portrait mode
      if (i % 2 === 0) {
        secondSide *= 2;
      }

      this.images.push({
        url: 'https://picsum.photos/seed/' + i + '/' + firstSide + '/' + secondSide,
        thumbnailUrl: 'https://picsum.photos/seed/' + i + '/' + firstSide / 10 + '/' + secondSide / 10,
        caption: 'Image number ' + i + ' from https://picsum.photos/',
        altText: 'Random image number ' + i
      });
    }
  }

  /**
   * Function triggered by the load more button
   */
  loadMoreImages() {
    this.eventsSubject.next();
  }

  allImagesInDom() {
    this.areMoreImagesAvailable = false;
  }
}
