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
| captionSeparator    | string                          | ` - `                | Separtor between the image number and the caption. Is only shown when the caption has text in it  |
| captionTemplate     | sting                             | `${currentNumber}/${totalNumber}${separator}${caption}`               | The template string for the image caption. For the available template variables [see here](#CaptionTemplate) |
| captionColorConfiguration | [ColorConfiguration](#ColorConfiguration) | [see here](#Default-ColorConfiguration) | Defines the colors to be used on the image caption |
| loadingAnimation  | [LoadingAnimation](#LoadingAnimation) | `LoadingAnimation.SPINNER` | Loading animation shown while the full sized image is loading|
| closeButtonStyle  | [ButtonStyle](#ButtonStyle)       | `ButtonStyle.FAB`     | Sets if the caption should be displayed or not|
| closeButtonColorConfiguration | [ColorConfiguration](#ColorConfiguration)    | [see here](#Default-ColorConfiguration) | Defines the colors to be used for the close button |
| prevNextButtonStyle | [ButtonStyle](#ButtonStyle)     | `ButtonStyle.FAB`    | Sets if the caption should be displayed or not|
| prevNextButtonColorConfiguration | [ColorConfiguration](#ColorConfiguration) | [see here](#Default-ColorConfiguration) | Defines the colors to be used for the prevoius and next buttons |

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

### `ButtonStyle`
| Name      | Description |
|-----------|-------------|
| FAB       | A round floating action button placed besides the image. Its position depends on the button it is set for |
| BAR       | A vertical or horizontal bar surrounding the image depending on the button it is set for |

### `ColorConfiguration`
| Name          | Type    | Description           |
|---------------|---------|-----------------------|
| backgroundColor | string  | A string representing a css color definition such as #FF00FF or rgba(0, 0, 0, 0.8). Used to define the background color of the specific object |
| foregroundColor | string  | A string representing a css color definition such as #FF00FF or rgba(0, 0, 0, 0.8). Used to define the foreground color, like text, of the specific object |

### Default `ColorConfiguration`
```js
  {
    backgroundColor: '#FFFFFF',
    foregroundColor: '#000000'
  }
```

### `CaptionTemplate`
The caption template can include the following variables which are replaced if present.

| Variable          | Description                                                                                       |
|-------------------|---------------------------------------------------------------------------------------------------|
| ${currentNumber}  | Number of the currently visible image within the gallery                                         |
| ${totalNumber}    | Total number of images in the gallery                                                             |
| ${separator}      | Sepertor between the image number and the caption. Is only shown when the caption has text in it  |
| ${caption}        | Caption of the selected image. Is only shown when the caption has text in it                      |

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
