import { Component, OnInit } from '@angular/core';
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
   * Function triggered by the load more button
   */
  loadMoreImages() {
    this.eventsSubject.next();
  }

  allImagesInDom() {
    this.areMoreImagesAvailable = false;
  }
}
