# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

* Added contributer guide (#413, #414)

### Changed

### Removed

## [1.2.0] - 2022-12-04

### Changed

* Update to Angular 15 and made the lib Angular 15 ready (#744)
* Fixed publishing of library to gpr
* Fixed ugly description on npmjs.com


## [1.1.0] - 2022-06-11

### Changed

* Fixed publishing of library to gpr
* Use a consistent color picker for the demo page (#412, #424)
* Update node to version 18 (#510, #511)
* Update to Angular 14 and made the lib Angular 14 ready (#552)


## [1.0.0] 2022-02-28

### Added

* Added footer to the demo page (#162. #163)
* Added prereleases to next tag on npm (#108, #242)
* Added configuration editor to demo page (#49, #365)
* Added autmatic release note extraction to workflows (#409)

### Changed

* Set angular compiler option to ivy-partial (#161, #257) **Breaking Change: The minimum supported angular version is now 12.x**
* Updated demo to Angular 13 (#294)
* Set package version to 1.0.0-branch
* Updated advanced-configuration-example.md (#157)

### Removed

* Removed unused image-configuration
* Removed obsolete folder `e2e`


## [0.7.0] - 2021-08-27

### Added

* Added custom swipe implementation based on touch events (#207, #208)
* Added image caption template system (#6, #154)  
* Added Angular material to the demo page (#212)
* Added configuration for caption colors (#213, #212)

### Changed

* Fixed issues with pointer on button (#212)
* Fixed issue with overlay and angular material (z-index issue) (#212)

### Removed

* Removed `hammerjs` as a peer dependency

## [0.6.1] - 2021-06-21

### Added

* Added links in the documentation

### Changed

* Fixed cursor on buttons in the demo (#149, #150)
* Fixed cursor on buttons in the library (#149, #152)
* Fixed missing `ColorConfiguration` export on pulic-api (#151)
* Fixed issue with z-indices (#155, #156)


## [0.6.0] - 2021-06-13

### Added

* Configuration option `thumbnailsWaitForBatch` to show thumbnails as soon as possible (#146)
* Configuration options for darkbox button color and styling (#147)
* Added `hammerjs` as peerDependency for touch support

### Changed

* Fixed all thumbnails being replaced by loading placeholder while loading a new batch (#138, #146)


## [0.5.0] - 2021-06-06

### Added

* Added portrait sample images to demo page (#118)
* Added automatic labeling of PRs on GitHub (#134) 
* Added event which fires when all images are in the DOM (#127, #128)
* Added load more button images to the demo (#127, #128)

### Changed

* Fixed incorrect export
* Changed demo page URL from `https://darkbox.failedsuccessfully.de` to `https://darkbox.click`
* Fixed images overlapping on `GridType.FLUID` (#136, #137)
* Moved configuration documentation to its own file so the `README` isn't to long


## [0.4.1] - 2021-05-21

### Changed

* Fixed missing exports in public api
* Fixed semversion on peer dependencies


## [0.4.0] - 2021-05-18

### Added

* Added loading placeholders (#65, #80)
* Added configuration examples (#4, #68)
* Added loading animation for full sized images (#95, #96)
* Added a dark mode to the demo page (#106, #107)

### Changed

* Updated demo page to angular 12 (#103)


## [0.3.0] - 2021-04-25

### Added

* Added static grid layout (#11, #78)
* Added fluid grid layout (#12, #79)

### Removed

* Dropped IE support


## [0.3.0] - 2021-04-25

### Added

* Added static grid layout (#11, #78)
* Added fluid grid layout (#12, #79)

### Removed

* Dropped IE support


## [0.2.0] - 2021-04-05

### Added

* Added list of supported browsers (#50)
* Added links to live demo (#47)
* Added configuration option to disable the caption (#61)
* Added documentation for grid configuration (#62)

### Changed

* Updated dependencies (#42, #43, #44, #45, #46, #48, #51, #52, #53, #54, #55, #56, #57, #58, #59, #60, #63, #65)
* Stop to list non-major dependency updates in changelog


## [0.1.2] - 2021-03-16

### Added

* Live demo page (#5. #40)

### Fixed

* Demo page gallery icon (#41)


## [0.1.1] - 2021-03-15

### Added

* Set up build pipeline (#23, #24)

### Changed

* Updated dependencies (#21, #22, #25)
* Updated `README.md` (#28)


## [0.1.0] - 2021-02-27

### Added

* Added most basic lightbox (#17)
* Configured *Renovate Bot* for the project (#1)

### Changed

* Updated dependencies (#9, #13, #14, #15)
