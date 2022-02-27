import { TestBed } from '@angular/core/testing';
import { DefaultConfiguration } from '../config/configuration.default';
import { ColorConfiguration } from '../model/color-configuration';
import { ButtonStyle, DarkboxConfiguration, LoadingAnimation, LoopDirection } from '../model/darkbox-configuration';
import { GridConfiguration, GridType } from '../model/grid-configuration';
import { ConfigurationService } from './configuration.service';

describe('ConfigurationServiceService', () => {
  let service: ConfigurationService;
  const defaultConfiguration = new DefaultConfiguration();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getEffectiveConfiguration should return the default configuration on null', () => {
    const actualConfiguration = service.getEffectiveConfiguration(null);

    expect(actualConfiguration).toBeDefined();
    // The spread operator and the sub-object must be used because jasmine does not support equals with interfaces
    // see also https://github.com/jasmine/jasmine/issues/598
    expect(actualConfiguration.darkboxConfiguration).toEqual({ ...defaultConfiguration.darkboxConfiguration });
    expect(actualConfiguration.gridConfiguration).toEqual({ ...defaultConfiguration.gridConfiguration });
  });

  it('#getEffectiveConfiguration should return the default configuration on empty input', () => {
    const actualConfiguration = service.getEffectiveConfiguration({});

    expect(actualConfiguration).toBeDefined();
    // The spread operator and the sub-object must be used because jasmine does not support equals with interfaces
    // see also https://github.com/jasmine/jasmine/issues/598
    expect(actualConfiguration.darkboxConfiguration).toEqual({ ...defaultConfiguration.darkboxConfiguration });
    expect(actualConfiguration.gridConfiguration).toEqual({ ...defaultConfiguration.gridConfiguration });
  });

  it('#getEffectiveConfiguration should return different darkboxConfiguration', () => {
    const inputConfiguration = {
      loopDirection: LoopDirection.NONE,
      loadingAnimation: LoadingAnimation.DOT,
      closeButtonStyle: ButtonStyle.FAB,
      prevNextButtonStyle: ButtonStyle.BAR,
      closeButtonColorConfiguration: {
        backgroundColor: '#00FF00',
        foregroundColor: '#FF0000'
      } as ColorConfiguration
    } as DarkboxConfiguration;
    const actualConfiguration = service.getEffectiveConfiguration({ darkboxConfiguration: inputConfiguration });

    expect(actualConfiguration).toBeDefined();
    expect(actualConfiguration.darkboxConfiguration.enableCaption).toBeTrue();
    expect(actualConfiguration.darkboxConfiguration.loopDirection).toEqual(inputConfiguration.loopDirection);
    expect(actualConfiguration.darkboxConfiguration.loadingAnimation).toEqual(inputConfiguration.loadingAnimation);
    expect(actualConfiguration.gridConfiguration).toEqual({ ...defaultConfiguration.gridConfiguration });
    expect(actualConfiguration.darkboxConfiguration.closeButtonStyle).toEqual(ButtonStyle.FAB);
    expect(actualConfiguration.darkboxConfiguration.prevNextButtonStyle).toEqual(ButtonStyle.BAR);
    expect(actualConfiguration.darkboxConfiguration.closeButtonColorConfiguration.backgroundColor).toEqual('#00FF00');
    expect(actualConfiguration.darkboxConfiguration.closeButtonColorConfiguration.foregroundColor).toEqual('#FF0000');
    expect(actualConfiguration.darkboxConfiguration.prevNextButtonColorConfiguration.backgroundColor).toEqual('#FFFFFF');
    expect(actualConfiguration.darkboxConfiguration.prevNextButtonColorConfiguration.foregroundColor).toEqual('#000000');
  });

  it('#getEffectiveConfiguration should return different gridConfiguration', () => {
    const inputConfiguration = {
      batchSize: 42,
      initialBatchSize: 69,
      gridType: GridType.STATIC,
      thumbnailAlignment: 'flex-end',
      zoomImages: false,
      thumbnailHeight: '420em',
      thumbnailWidth: '69em',
      enableLoadingPlaceholder: true,
      thumbnailsWaitForBatch: false,
    } as GridConfiguration;
    const actualConfiguration = service.getEffectiveConfiguration({ gridConfiguration: inputConfiguration });

    expect(actualConfiguration).toBeDefined();
    expect(actualConfiguration.darkboxConfiguration).toEqual({ ...defaultConfiguration.darkboxConfiguration });
    expect(actualConfiguration.gridConfiguration.batchSize).toEqual(inputConfiguration.batchSize);
    expect(actualConfiguration.gridConfiguration.initialBatchSize).toEqual(inputConfiguration.initialBatchSize);
    expect(actualConfiguration.gridConfiguration.batchSizeScalingFactors).toEqual(defaultConfiguration.gridConfiguration.batchSizeScalingFactors);
    expect(actualConfiguration.gridConfiguration.gridType).toEqual(inputConfiguration.gridType);
    expect(actualConfiguration.gridConfiguration.thumbnailAlignment).toEqual(inputConfiguration.thumbnailAlignment);
    expect(actualConfiguration.gridConfiguration.zoomImages).toBeFalse();
    expect(actualConfiguration.gridConfiguration.thumbnailHeight).toEqual(inputConfiguration.thumbnailHeight);
    expect(actualConfiguration.gridConfiguration.thumbnailWidth).toEqual(inputConfiguration.thumbnailWidth);
    expect(actualConfiguration.gridConfiguration.enableLoadingPlaceholder).toBeTrue();
    expect(actualConfiguration.gridConfiguration.thumbnailsWaitForBatch).toBeFalse();
  });
});
