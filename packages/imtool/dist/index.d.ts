type ImageType = string | Blob | File | HTMLImageElement;
type ImageLike = HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | ImageBitmap | OffscreenCanvas;

declare class ImTool {
    private canvas;
    private outputType;
    private outputQuality;
    readonly originalWidth: number;
    readonly originalHeight: number;
    /**
     * Constructs a new ImTool instance from a loaded image.
     * Do not use this directly, use from* functions from index.ts instead.
     * @param image Loaded image. Must be from the same origin, or from an origin accessible to the website.
     */
    constructor(image: ImageLike);
    get width(): number;
    get height(): number;
    /**
     * Crops the image.
     * @param x Horizontal offset.
     * @param y Vertical offset.
     * @param width Width.
     * @param height Height.
     */
    crop(x: number, y: number, width: number, height: number): ImTool;
    /**
     * Scales the image, doesn't preserve ratio.
     * @param width New width.
     * @param height New height.
     */
    scale(width: number, height: number): ImTool;
    /**
     * Flips the image.
     * @param vertical When true the image will be flipped vertically, otherwise it will be flipped horizontally.
     */
    flip(vertical?: boolean): ImTool;
    /**
     * Flips the image horizontally.
     */
    flipH(): ImTool;
    /**
     * Flips the image vertically.
     */
    flipV(): ImTool;
    /**
     * Generates a thumbnail.
     * @param maxSize Maximum width or height.
     * @param cover When true this will cause the thumbnail to be a square and image will be centered with its smallest dimension becoming as large as maxDimension and the overflow being cut off. Default: false.
     */
    thumbnail(maxSize: number, cover?: boolean): ImTool;
    /**
     * Rotates the image by a given amount of radians relative to the center of the image. This will change the size of the canvas to fit new image.
     * @param rad Radians.
     */
    rotate(rad: number): ImTool;
    /**
     * Rotates the image by a given amount of degrees relative to the center of the image. This will change the size of the canvas to fit new image.
     * @param degrees Degrees.
     */
    rotateDeg(degrees: number): ImTool;
    /**
     * Sets the canvas background.
     * @param color Color can be any valid color string.
     */
    background(color: string): ImTool;
    /**
     * Sets the input type. (Default: image/jpeg)
     * @param type Type, can be anything supported by the browser, common examples: image/jpeg and image/png.
     */
    type(type: string): ImTool;
    /**
     * Sets the quality for lossy compression (like image/jpeg). Default: 0.7.
     * @param quality Quality from 0 to 1.
     */
    quality(quality: number): ImTool;
    /**
     * Exports the resulting image as blob.
     */
    toBlob(): Promise<Blob>;
    /**
     * Exports the resulting image as blob URL.
     */
    toBlobURL(): Promise<string>;
    /**
     * Exports the resulting image as data URL.
     */
    toDataURL(): Promise<string>;
    /**
     * Exports the resulting image as HTMLCanvasElement.
     */
    toCanvas(): Promise<HTMLCanvasElement>;
    /**
     * Exports the resulting image as a HTMLImageElement.
     */
    toImage(): Promise<HTMLImageElement>;
    /**
     * Downloads the resulting image.
     * @param name
     */
    toDownload(name: string): Promise<void>;
    /**
     * Exports the resulting image as File.
     * @param name
     */
    toFile(name: string): Promise<File>;
}

/**
 * Builds an empty canvas.
 * @param width Width in pixels.
 * @param height Height in pixels.
 * @returns The new canvas and the corresponding context.
 */
declare function emptyCanvas(width: number, height: number): {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
};
declare function isTainted(ctx: CanvasRenderingContext2D): boolean;
/**
 * Flips the image.
 * @param vertical When true the image will be flipped vertically, otherwise it will be flipped horizontally.
 */
declare function flip(input: HTMLCanvasElement, vertical?: boolean): HTMLCanvasElement;
/**
 * Generates a thumbnail.
 * @param maxSize Maximum width or height.
 * @param cover When true this will cause the thumbnail to be a square and image will be centered with its smallest dimension becoming as large as maxDimension and the overflow being cut off. Default: false.
 */
declare function thumbnail(input: HTMLCanvasElement, maxSize: number, cover?: boolean): HTMLCanvasElement;
/**
 * Rotates the image by a given amount of radians relative to the center of the image. This will change the size of the canvas to fit new image.
 * @param rad Radians.
 */
declare function rotate(input: HTMLCanvasElement, rad: number): HTMLCanvasElement;
declare function fromImageLike(imageLike: ImageLike): HTMLCanvasElement;
declare function fromFile(file: Blob): Promise<HTMLCanvasElement>;

declare const canvas_emptyCanvas: typeof emptyCanvas;
declare const canvas_isTainted: typeof isTainted;
declare const canvas_flip: typeof flip;
declare const canvas_thumbnail: typeof thumbnail;
declare const canvas_rotate: typeof rotate;
declare const canvas_fromImageLike: typeof fromImageLike;
declare const canvas_fromFile: typeof fromFile;
declare namespace canvas {
  export {
    canvas_emptyCanvas as emptyCanvas,
    canvas_isTainted as isTainted,
    canvas_flip as flip,
    canvas_thumbnail as thumbnail,
    canvas_rotate as rotate,
    canvas_fromImageLike as fromImageLike,
    canvas_fromFile as fromFile,
  };
}

/**
 * Creates a new instance of ImTool from a <canvas> element.
 * @param video
 */
declare function fromCanvas(canvas: HTMLCanvasElement): Promise<ImTool>;
/**
 * Creates a new instance of ImTool from a <video> element. (Must be during playback.)
 * @param video
 */
declare function fromVideo(video: HTMLVideoElement): Promise<ImTool>;
/**
 * Creates a new instance of ImTool from a MediaStream. (Must contain at least one video track.)
 * @param stream
 */
declare function fromMediaStream(stream: MediaStream): Promise<ImTool>;
/**
 * Creates a new instance of ImTool from an image URL, Blob, File or an <img> element.
 * The image be from the same origin, or from an origin accessible to the website.
 * @param image The image to be loaded.
 */
declare function fromImage(image: ImageType): Promise<ImTool>;
/**
 * Creates a new instance of ImTool from screen capture.
 */
declare function fromScreen(): Promise<ImTool>;
/**
 * Creates a new instance of ImTool from webcam capture.
 */
declare function fromWebcam(): Promise<ImTool>;

export { canvas, fromCanvas, fromImage, fromMediaStream, fromScreen, fromVideo, fromWebcam };
