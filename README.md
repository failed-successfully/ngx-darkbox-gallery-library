# Darkbox Gallery

Darkbox Gallery is a lightbox themes gallery library for Angular applications using the ivy engine (Angular 9+).
## Why?
There are many, many lightbox themed gallery libraries out there for Angular. Some of them are fairly useable, but most lack a good configuration and adaptability. Therefore the philosophy of Darkbox Gallery (Darkbox for short) is to provide good configuration options so you do not need to write extra logic to adapt Darkbox to your needs. While doing so every configuration has useful defaults so the entry barrier for using Darkbox is as low as possible. So come to the dark side of galleries; we have 🍪🍪.
## How?

### Installation
Install npm package for Angular version 9+:

```
npm i ngx-darkbox-gallery --save
```

Import the module into your `app.module.ts`
```typescript
...
import { NgxDarkboxGalleryModule } from 'ngx-darkbox-gallery';

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

#### Advanced configuration
This projrct was created by following https://medium.com/angular-in-depth/complete-beginner-guide-to-publish-an-angular-library-to-npm-d42343801660 (2021-02-27)
