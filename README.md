# Darkbox Gallery

Darkbox Gallery is a highly configurable lightbox themed gallery library for Angular applications using the ivy engine (Angular 9+).

<hr>

![Darkbox logo](./src/assets/darkbox-icon128.png)

## Why?
There are many, many lightbox themed gallery libraries out there for Angular. Some of them are fairly useable, but most lack a good configuration and adaptability. Therefore the philosophy of Darkbox Gallery (Darkbox for short) is to provide good configuration options so you do not need to write extra logic to adapt Darkbox to your needs. While doing so every configuration has useful defaults so the entry barrier for using Darkbox is as low as possible. So come to the dark side of galleries; we don't keep 🍪🍪.

## What does it even look like?
If you are not shure what you can expect from Darkbox please have a look at the current version of our [live demo](https://darkbox.failedsuccessfully.de/).

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
```
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
### Advanced configuration
TBD

## Browser support
TBD

## Found a bug 🐛/🐞?
If you find a bug in Darkbox please open an issue [here](https://github.com/failed-successfully/ngx-darkbox-gallery-library/issues/new) so we can fix it and make Darkbox better for you and everyone else.
