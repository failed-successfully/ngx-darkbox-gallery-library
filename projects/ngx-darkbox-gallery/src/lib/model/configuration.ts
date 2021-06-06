import { DarkboxConfiguration } from "./darkbox-configuration";
import { GridConfiguration } from "./grid-configuration";
import { ImageConfiguration } from "./image-configuration";

export interface Configuration {
  imageConfiguration?: ImageConfiguration;
  /**
   * Sets the look and features of the lighbox component of Darkbox
   */
  darkboxConfiguration?: DarkboxConfiguration;
  /**
   * Sets the look and features of the thumbnail grid
   */
  gridConfiguration?: GridConfiguration;
}
