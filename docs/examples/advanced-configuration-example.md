# Advanced configuration example

The following example shows how Darkbox can be configured. In this example all configuration values use the Darkbox defaults. To learn which possible values each configuration can have please refer to the [configuration value documentation](../../README.md#Advanced-configuration).

## Inclusion in the desired `.html` file
```ts
<darkbox-gallery [images]="images" [configuration]="configuration"></darkbox-gallery>
```

## View of the corresponding `.ts` file
```ts
import { Component } from '@angular/core';
import { Image, DarkboxConfiguration } from '@failed-successfully/ngx-darkbox-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  configuration: DarkboxConfiguration = {
      darkboxConfiguration: {
        loopDirection: LoopDirection.BOTH,
        enableCaption: true,
      },
      gridConfiguration: {
          initialBatchSize = 10,
          batchSize: 15,
          batchSizeScalingFactors: [
            {
              pxWidth: 1400,
              scalingFactor: 5
            },
            {
              pxWidth: 992,
              scalingFactor: 2
            }
          ];
          gridType: GridType.STATIC,
          thumbnailAlignment: 'flex-start',
          zoomImages: true,
          thumbnailHeight: '175px',
          thumbnailWidth: '175px',
          enableLoadingPlaceholder: true,
      },
      imageConfiguration: {}
  } as DarkboxConfiguration;

  images: Image[] = [{
        url: 'https://picsum.photos/seed/3000/2000',
        thumbnailUrl: 'https://picsum.photos/300/200'
  }];
}
```
