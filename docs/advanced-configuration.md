# Darkbox advanced configuration

The advanced configuration in Darkbox is done via a `Configuration` object which has the following properties:
| Name                 | Type                                          | Required | Description |
|----------------------|-----------------------------------------------|--------- |-------------|
| darkboxConfiguration | [DarkboxConfiguration](#DarkboxConfiguration) | false    | Sets the look and features of the lighbox component of Darkbox|
| gridConfiguration    | [GridConfiguration](#GridConfiguration)       | false    | Sets the look and features of the thumbnail grid|

## `DarkboxConfiguration`
| Name              | Type                              | Default               | Description |
|-------------------|-----------------------------------|-----------------------|-------------|
| loopDirection     | [LoopDirection](#LoopDirection)   | `LoopDirection.BOTH`  |Sets the direction the darkbox will allow looping through the images |
| enableCaption     | bool                              | `true`                |Sets if the caption should be displayed or not|
| loadingAnimation  | [LoadingAnimation](#LoadingAnimation) | `LoadingAnimation.SPINNER` | Loading animation shown while the full sized image is loading|

### `LoopDirection`
| Name      | Description |
|-----------|-------------|
| FORWARD   | Only after the last image the first one will be displayed again |
| BACKWARD  | Only before the first image the last one will be displayed again|
| BOTH      | The first image will be displayed after the last one and vise versa|
| NONE      | There is a fixed end in both directions                         |

### `LoadingAnimation`
| Name      | Description |
|-----------|-------------|
| DOT       | A line of jumping dots moving in a wave like form     |
| BAR       | Three vertical bars getting wider and smaller         |
| FLEX_RING | A ring flexing in and out                             |
| [SPINNER](https://youtu.be/3V8nl8v24cQ)   | A classical spinner animation turning infinitely      |
| SQUARE    | A line of jumping squares moving in a wave like form  |

## `GridConfiguration`
| Name                    | Type                      | Default | Description |
|-------------------------|---------------------------|---------|-------------|
| initialBatchSize        | number                    | `10`    |  Number of images loaded initially on small and medium sized devices (smartphone / tablet). This is scaled by a factor according to the resolution of bigger displays|
| batchSize               | number                    | `15`    | The number of images loaded in each load more images call|
| batchSizeScalingFactors | ResolutionConfiguration[] | [see here](#Default-ResolutionConfiguration) | A list of scaling factors to be used to scale the initial batch size by screen width|
| gridType                | GridType                  | `GridType.STATIC` | Sets the type of the image grid|
| thumbnailAlignment      | string \| null            | `flex-start` | Allows for configuration of the flex property justifiy-content. All option of the css property justifiy-cotnent are allowed|
| zoomImages              | boolean                   | `true`  | Enables / Disables zooming effect for thumbnail hovering|
| thumbnailHeight         | string \| null            | `175px` | Size used to define the height of the thumbnails and loading placeholders. For gridType FLUID this applies only to the loading placeholders. This should be defined like you would in css including the unit (e.g. px, em, rem)|
| thumbnailWidth          | string \| null            | `175px` | Size used to define the width of the thumbnails and loading placeholders. For gridType FLUID this applies only to the loading placeholders. This should be defined like you would in css including the unit (e.g. px, em, rem)|
| enableLoadingPlaceholder| boolean                   | `true`  | Enables / Disables the shimmer placeholder while loading the thumbnail images|
| thumbnailsWaitForBatch  | boolean                   | `true`  | Configures the behavior of the loading placeholders for thumbnail images. If true, the thumbnails of a batch are shown, when all thumbnails of the batch are loaded. If false, the thumbnail for each image is shown as soon as it gets available. This only takes effect if loading placeholders are enabled.|

### `ResolutionConfiguration`
| Name          | Type    | Description           |
|---------------|---------|-----------------------|
| pxWidth       | number  | The minimum screen width this configuration applies to, up to the next higher resolution configuration|
| scalingFactor | number  | The batch size scaling factor to be applied in the given configuration range                          |

### Default `ResolutionConfiguration`
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

### `GridType`
| Name      | Description |
|-----------|-------------|
| STATIC    | A grid of images rendered in rows of dynamic length, preferrebly used for equal sized thumbnails (thumbnail size can be configured seperatly) |
| FLUID     | A grid optimized for thumbnails with different aspect ratios and orientations, rendered in columns (if selected thumbnailHeight and thumbnailWidth are only used for placeholders while loading) |
