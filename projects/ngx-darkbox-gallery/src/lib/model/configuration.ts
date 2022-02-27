import { DarkboxConfiguration } from "./darkbox-configuration";
import { GridConfiguration } from "./grid-configuration";

export interface Configuration {
  /**
   * Sets the look and features of the lighbox component of Darkbox
   */
  darkboxConfiguration?: DarkboxConfiguration;
  /**
   * Sets the look and features of the thumbnail grid
   */
  gridConfiguration?: GridConfiguration;
}
