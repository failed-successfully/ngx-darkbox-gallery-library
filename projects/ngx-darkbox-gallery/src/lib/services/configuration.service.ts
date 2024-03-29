import { Injectable } from '@angular/core';
import { DefaultConfiguration } from '../config/configuration.default';
import { Configuration } from '../model/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private defaultConfiguration = new DefaultConfiguration();

  constructor() { }

  public getEffectiveConfiguration(customConfiguration: Configuration): Configuration {
    if (!this.defaultConfiguration) {
      this.defaultConfiguration = new DefaultConfiguration();
    }

    const effectiveGridConfig = { ...this.defaultConfiguration.gridConfiguration, ...customConfiguration?.gridConfiguration };
    const effectiveDarkboxConfig = { ...this.defaultConfiguration.darkboxConfiguration, ...customConfiguration?.darkboxConfiguration };
    return {
      gridConfiguration: effectiveGridConfig,
      darkboxConfiguration: effectiveDarkboxConfig
    } as Configuration;
  }
}
