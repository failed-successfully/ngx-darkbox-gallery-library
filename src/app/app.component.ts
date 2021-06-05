import { Component, OnInit } from '@angular/core';
import { Image } from 'dist/ngx-darkbox-gallery/lib/model/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: Image[] = [];

  ngOnInit(): void {
    const shortSide = 2000;
    const longSide = 3750;
    // Populate the demo page with sample images
    for (let i = 1; i <= 100; i++) {
      let firstSide = longSide;
      let secondSide = shortSide;
      // Set every second image to portrait mode
      if (i % 2 === 0) {
        firstSide = shortSide;
        secondSide = shortSide;
      }

      this.images.push({
        url: 'https://picsum.photos/seed/' + i + '/' + firstSide + '/' + secondSide,
        thumbnailUrl: 'https://picsum.photos/seed/' + i + '/' + firstSide / 10 + '/' + secondSide / 10,
        caption: 'Image number ' + i + ' from https://picsum.photos/',
        altText: 'Random image number ' + i
      });
    }
  }
}
