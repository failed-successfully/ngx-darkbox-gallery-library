import { DarkboxConfiguration, LoopDirection } from "../model/darkbox-configuration";

export class DefaultDarkboxConfiguration  implements DarkboxConfiguration {
  loopDirection = LoopDirection.BOTH;
}
