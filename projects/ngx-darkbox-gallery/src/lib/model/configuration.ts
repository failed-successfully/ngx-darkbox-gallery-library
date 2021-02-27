import { DarkboxConfiguration } from "./darkbox-configuration";
import { GridConfiguration } from "./grid-configuration";
import { ImageConfiguration } from "./image-configuration";

export interface Configuration {
  imageConfiguration?: ImageConfiguration;
  darkboxConfiguration?: DarkboxConfiguration;
  gridConfiguration?: GridConfiguration;
}
