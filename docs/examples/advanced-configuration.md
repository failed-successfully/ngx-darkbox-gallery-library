# Advanced configuration example

Inclusion in the desired `.html` file
```ts
<darkbox-gallery [images]="images" [configuration]="configuration"></darkbox-gallery>
```

View of the corresponding `.ts` file
```ts
import { Component } from '@angular/core';
import { Image, DarkboxConfiguration } from '@failed-successfully/ngx-darkbox-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  configuration: DarkboxConfiguration = {} as DarkboxConfiguration;

  images: Image[] = [{
        url: 'https://picsum.photos/seed/3000/2000',
        thumbnailUrl: 'https://picsum.photos/300/200'
  }];
}
```
