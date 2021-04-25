import { Configuration } from "../model/configuration";
import { DefaultDarkboxConfiguration } from "./darkbox-configuration.default";
import { DefaultGridConfiguration } from "./grid-configuration.default";
import { DefaultImageConfiguration } from './image-configuration.default';

export class DefaultConfiguration implements Configuration {
  darkboxConfiguration = new  DefaultDarkboxConfiguration();
  gridConfiguration = new  DefaultGridConfiguration();
  imageConfiguration = new DefaultImageConfiguration();
}
