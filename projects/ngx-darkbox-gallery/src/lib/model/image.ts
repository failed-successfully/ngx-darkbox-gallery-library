export class Image {
  /**
   * An id to identify the image in events. This is not used by the library itself
   */
  public identifier?: string;
  /**
   * URL of the fullsize image
   */
  public url: string;
  /**
   * URL of the thumbnail size image
   */
  public thumbnailUrl: string;
  /**
   * A short caption that can be shown under the  image in darkbox
   */
  public caption?: string;
  /**
   * The alternative text shown when the image can not be loaded
   */
  public altText?: string;
}
