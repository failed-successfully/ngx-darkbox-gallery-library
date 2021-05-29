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

For an example of a more advanced Darkbox configuration have a look at [our examples](./docs/examples/advanced-configuration-example.md).

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

Please have a look at all available Darkbox configurations in our [complete configuration documentation](./docs/advanced-configuration.md).

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
