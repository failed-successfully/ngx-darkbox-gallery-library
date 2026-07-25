export interface Image {
  /**
   * An id to identify the image in events. This is not used by the library itself
   */
  identifier?: string;
  /**
   * URL of the full sized image
   */
  url: string;
  /**
   * URL of the thumbnail image
   */
  thumbnailUrl: string;
  /**
   * A short caption that can be shown under the  image in darkbox
   */
  caption?: string;
  /**
   * The alternative text shown when the image can not be loaded
   */
  altText?: string;
}
