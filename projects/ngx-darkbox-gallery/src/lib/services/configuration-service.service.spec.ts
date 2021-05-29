import { TestBed } from '@angular/core/testing';
import { DefaultConfiguration } from '../config/configuration.default';
import { Configuration } from '../model/configuration';
import { ConfigurationService } from './configuration.service';


describe('ConfigurationServiceService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the default configuration on null', () => {
    const defaultConfiguration: Configuration = new DefaultConfiguration();
    const actualConfiguration = service.getEffectiveConfiguration(null);

    expect(actualConfiguration).toBeDefined()
    // The spread operator and the sub-object must be used because jasmine does not support equals with interfaces
    // see also https://github.com/jasmine/jasmine/issues/598
    expect(actualConfiguration.imageConfiguration).toEqual({ ...defaultConfiguration.imageConfiguration });
    expect(actualConfiguration.darkboxConfiguration).toEqual({ ...defaultConfiguration.darkboxConfiguration });
    expect(actualConfiguration.gridConfiguration).toEqual({ ...defaultConfiguration.gridConfiguration });
  })

  it('should return the default configuration on empty input', () => {
    const defaultConfiguration: Configuration = new DefaultConfiguration();
    const actualConfiguration = service.getEffectiveConfiguration({});

    expect(actualConfiguration).toBeDefined()
    // The spread operator and the sub-object must be used because jasmine does not support equals with interfaces
    // see also https://github.com/jasmine/jasmine/issues/598
    expect(actualConfiguration.imageConfiguration).toEqual({ ...defaultConfiguration.imageConfiguration });
    expect(actualConfiguration.darkboxConfiguration).toEqual({ ...defaultConfiguration.darkboxConfiguration });
    expect(actualConfiguration.gridConfiguration).toEqual({ ...defaultConfiguration.gridConfiguration });
  })
});
