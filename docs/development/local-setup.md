# Local setup

## Quick start

1. Check out the original repository or your fork.
2. Run `npm i`
3. Run `ng build ngx-darkbox-gallery --watch`
4. Link the library to the demo app (on a new terminal)
    1. Run `cd dist/ngx-darkbox-gallery`
    2. Run `npm link`
    3. Run `cd ../..`
    4. Run `npm link @failed-successfully/ngx-darkbox-gallery`
    5. Run `ng serve --open`

## Folder structure

The projects consist of an angular demo app located in `src/` and the actual library in `projects/ngx-darkbox-gallery/`.
In the following the the folder structure within the library will be explained.

| Folder              | Description / Content                                   |
|---------------------|---------------------------------------------------------|
| src/                | The main source folder of the library                   |
| src/components/     | Components of the library like the overlay              |
| src/config/         | Default values for all configurations                   |
| src/directives/     | Directives like the touch controls used in the library  |
| src/model/          | All interfaces like the configuration ones              |
| src/scss-variables/ | Reusable styling variables                              |
| src/services/       | Services which contain reusable library logic           |
