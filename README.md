# Darkbox Gallery

Darkbox Gallery is a highly configurable lightbox themed gallery library for Angular applications using the ivy engine (Angular 9+).

<hr>

![Darkbox logo](./src/assets/darkbox-icon128.png)

## Why?
There are many, many lightbox themed gallery libraries out there for Angular. Some of them are fairly useable, but most lack a good configuration and adaptability. Therefore the philosophy of Darkbox Gallery (Darkbox for short) is to provide good configuration options so you do not need to write extra logic to adapt Darkbox to your needs. While doing so every configuration has useful defaults so the entry barrier for using Darkbox is as low as possible. So come to the dark side of galleries; we don't keep 🍪🍪.

## What does it even look like?
If you are not sure what you can expect from Darkbox please have a look at the current version of our [live demo](https://darkbox.failedsuccessfully.de/).

## How?
### Installation
Install npm package for Angular version 9+:

```
npm i @failed-successfully/ngx-darkbox-gallery --save
```

Import the module into your `app.module.ts`
```ts
...
import { NgxDarkboxGalleryModule } from '@failed-successfully/ngx-darkbox-gallery';

@NgModule({
  ...,
  imports: [
    ...,
    NgxDarkboxGalleryModule
  ],
  ...
})
export class AppModule { }
```
### Usage
The simplest way of using Darkbox is to include the component with its default configuration as shown below.

Inclusion in the desired `.html` file
```ts
<darkbox-gallery [images]="images"></darkbox-gallery>
```

View of the corresponding `.ts` file
```ts
import { Component } from '@angular/core';
import { Image } from '@failed-successfully/ngx-darkbox-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images: Image[] = [{
        url: 'https://picsum.photos/seed/3000/2000',
        thumbnailUrl: 'https://picsum.photos/300/200'
  }];
}
```

For an example of a more advanced Darkbox configuration have a look at [our examples](./docs/examples/advanced-configuration.md).

### Darkbox inputs
| Name                  | Type              | Required  | Description                         |
|-----------------------|-------------------|-----------|-------------------------------------|
| images                | [Image](#Image)[] | true      | List of images displayed in Darkbox |
| configuration         | Configuration     | false     | see Advanced Configuration          |
| loadMoreImagesEvents  | Observable<void>  | false     | Input to handle click events from the outside world |

### Image
| Name          | Type    | Required | Description                                                                   |
|---------------|---------|----------|-------------------------------------------------------------------------------|
| identifier    | string  | false    | An id to identify the image in events. This is not used by the library itself |
| url           | string  | true     | URL of the full sized image                                                   |
| thumbnailUrl  | string  | true     | URL of the thumbnail image                                                    |
| caption       | string  | true     | A short caption that can be shown under the  image in darkbox                 |
| altText       | string  | false    | The alternative text shown when the image can not be loaded                   |

### Advanced configuration

The advanced configuration in Darkbox is done via a `Configuration` object which has the following properties:
| Name                 | Type                                          | Required | Description |
|----------------------|-----------------------------------------------|--------- |-------------|
| darkboxConfiguration | [DarkboxConfiguration](#DarkboxConfiguration) | false    | Sets the look and features of the lighbox component of Darkbox|
| gridConfiguration    | [GridConfiguration](#GridConfiguration)]      | false    | Sets the look and features of the thumbnail grid|

#### `DarkboxConfiguration`
| Name              | Type                              | Default               | Description |
|-------------------|-----------------------------------|-----------------------|-------------|
| loopDirection     | [LoopDirection](#LoopDirection)   | `LoopDirection.BOTH`  |Sets the direction the darkbox will allow looping through the images |
| enableCaption     | bool                              | `true`                |Sets if the caption should be displayed or not|
| loadingAnimation  | [LoadingAnimation](#LoadingAnimation) | `LoadingAnimation.SPINNER` | Loading animation shown while the full sized image is loading|

##### `LoopDirection`
| Name      | Description |
|-----------|-------------|
| FORWARD   | Only after the last image the first one will be displayed again |
| BACKWARD  | Only before the first image the last one will be displayed again|
| BOTH      | The first image will be displayed after the last one and vise versa|
| NONE      | There is a fixed end in both directions                         |

##### `LoadingAnimation`
| Name      | Description |
|-----------|-------------|
| DOT       | A line of jumping dots moving in a wave like form     |
| BAR       | Three vertical bars getting wider and smaller         |
| FLEX_RING | A ring flexing in and out                             |
| [SPINNER](https://youtu.be/3V8nl8v24cQ)   | A classical spinner animation turning infinitely      |
| SQUARE    | A line of jumping squares moving in a wave like form  |

#### `GridConfiguration`
| Name                    | Type                      | Default  | Description |
|-------------------------|---------------------------|----------|-------------|
| initialBatchSize        | number                    | `10`     |  Number of images loaded initially on small and medium sized devices (smartphone / tablet). This is scaled by a factor according to the resolution of bigger displays|
| batchSize               | number                    | `15`     | The number of images loaded in each load more images call|
| batchSizeScalingFactors | ResolutionConfiguration[] | [see here](#Default-ResolutionConfiguration) | A list of scaling factors to be used to scale the initial batch size by screen width|
| gridType                | GridType                  | `GridType.STATIC` | Sets the type of the image grid|
| thumbnailAlignment      | string \| null            | `flex-start` | Allows for configuration of the flex property justifiy-content. All option of the css property justifiy-cotnent are allowed|
| zoomImages              | boolean                   | `true`   | Enables / Disables zooming effect for thumbnail hovering|
| thumbnailHeight         | string \| null            | `175px`  | Size used to define the height of the thumbnails and loading placeholders. For gridType FLUID this applies only to the loading placeholders. This should be defined like you would in css including the unit (e.g. px, em, rem)|
| thumbnailWidth          | string \| null            | `175px`  | Size used to define the width of the thumbnails and loading placeholders. For gridType FLUID this applies only to the loading placeholders. This should be defined like you would in css including the unit (e.g. px, em, rem)|
| enableLoadingPlaceholder| boolean                   | `true`  | Enables / Disables the shimmer placeholder while loading the thumbnail images|

##### `ResolutionConfiguration`
| Name          | Type    | Description           |
|---------------|---------|-----------------------|
| pxWidth       | number  | The minimum screen width this configuration applies to, up to the next higher resolution configuration|
| scalingFactor | number  | The batch size scaling factor to be applied in the given configuration range                          |

##### Default `ResolutionConfiguration`
```js
 [
    {
      pxWidth: 1400,
      scalingFactor: 5
    },
    {
      pxWidth: 992,
      scalingFactor: 2
    }
  ]
```

##### `GridType`
| Name      | Description |
|-----------|-------------|
| STATIC    | A grid of images rendered in rows of dynamic length, preferrebly used for equal sized thumbnails (thumbnail size can be configured seperatly) |
| FLUID     | A grid optimized for thumbnails with different aspect ratios and orientations, rendered in columns (if selected thumbnailHeight and thumbnailWidth are only used for placeholders while loading) |

### Available events
Almost everything that happens in Darkbox triggers an event. Therefore it is easy for you to know what happened when. It is your choice to react to the provides event (e.g. using it to provide statistics). Currently Darkbox exposes the following events:

| Name                | Type    | Description                                                                       |
|---------------------|---------|-----------------------------------------------------------------------------------|
| imageClicked        | Image   | Signals that a single image was clicked. The clicked images is being emitted      |
| thumbnailLoaded     | Image   | Signals that a single thumbnail was loaded. The image containing the thumbnail is being emitted|
| allThumbnailsLoaded | boolean | Signals that all thumbnails currently displayed have bean loaded                  |
| allImagesInDom      | boolean | Signals that all images provided from the input are displayed in the DOM. This does not mean that all thumbnails/images are completely loaded|
| darkboxClosed       | boolean | Signals that the lightbox/Darkbox was closed by the user                          |
| darkboxNext         | boolean | Signals that the user clicked the next image button                               |
| darkboxPrev         | boolean | Signals that the user clicked the previous image button                           |
| darkboxImageLoaded  | Image   | Signals that the full sized images was loaded. The loaded images is being emitted |

## Browser support
| Browser | Supported versions                                  |
|---------|-----------------------------------------------------|
| Chrome  | latest                                              |
| Firefox |	latest and extended support release (ESR)           |
| Edge    |	2 most recent major versions                        |
| IE      | [No. It's dead, Jim.](https://youtu.be/dQw4w9WgXcQ) |
| Safari  |	2 most recent major versions                        |
| iOS     |	2 most recent major versions                        |

## Found a bug 🐛/🐞?
If you find a bug in Darkbox please open an issue [here](https://github.com/failed-successfully/ngx-darkbox-gallery-library/issues/new) so we can fix it and make Darkbox better for you and everyone else.
