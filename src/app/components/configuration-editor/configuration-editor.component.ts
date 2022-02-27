import { Component, EventEmitter, Output } from '@angular/core';
import { Configuration, ButtonStyle, GridType, LoadingAnimation, LoopDirection, ResolutionConfiguration } from 'projects/ngx-darkbox-gallery/src/public-api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configuration-editor',
  templateUrl: './configuration-editor.component.html',
  styleUrls: ['./configuration-editor.component.scss']
})
export class ConfigurationEditorComponent {

  liveUpdates = true;

  @Output()
  configChanged = new EventEmitter<Configuration>();

  loopDirection = Object.keys(LoopDirection);
  loadingAnimation = Object.keys(LoadingAnimation);
  buttonStyle = Object.keys(ButtonStyle);
  gridType = Object.keys(GridType);

  configuration: Configuration = {
    darkboxConfiguration: {
      loopDirection: LoopDirection.BOTH,
      enableCaption: true,
      captionColorConfiguration: {
        backgroundColor: '#FFFFFF',
        foregroundColor: '#000000'
      },
      loadingAnimation: LoadingAnimation.SPINNER,
      closeButtonStyle: ButtonStyle.FAB,
      closeButtonColorConfiguration: {
        backgroundColor: '#FFFFFF',
        foregroundColor: '#000000'
      },
      prevNextButtonStyle: ButtonStyle.FAB,
      prevNextButtonColorConfiguration: {
        backgroundColor: '#FFFFFF',
        foregroundColor: '#000000'
      },
      captionSeparator: ' - ',
      captionTemplate: '${currentNumber}/${totalNumber}${separator}${caption}'
    },
    gridConfiguration: {
      initialBatchSize: 10,
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
      ],
      gridType: GridType.STATIC,
      thumbnailAlignment: 'flex-start',
      zoomImages: true,
      thumbnailHeight: '175px',
      thumbnailWidth: '175px',
      enableLoadingPlaceholder: true,
      thumbnailsWaitForBatch: true
    }
  } as Configuration;

  constructor(private toastr: ToastrService) { }

  /**
   * Gets called by fields when the config is updated
   */
  configUpdated(): void {
    // Re-Render the json
    // Spread the configuration to a brand new object due to call by reference error in change detection
    this.configuration = {...this.configuration};

    if (this.liveUpdates) {
      this.publishChanges();
    }
  }

  removeFactor(i): void {
    this.configuration.gridConfiguration.batchSizeScalingFactors.splice(i,1);
    this.configUpdated();
  }

  addFactor(): void {
    const factor = {
      pxWidth: 992,
      scalingFactor: 2
    } as ResolutionConfiguration;
    this.configuration.gridConfiguration.batchSizeScalingFactors.push(factor);
    this.configUpdated();
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(JSON.stringify(this.configuration));
    this.toastr.success('Configuration copied to clipboard <3');
  }

  /**
   * Emits the configuration event from the component
   */
  private publishChanges(): void {
    this.configChanged.emit(this.configuration);
  }
}
