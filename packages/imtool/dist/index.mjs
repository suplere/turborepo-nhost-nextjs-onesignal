var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/utils/file.ts
function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      resolve(reader.result);
    });
    reader.addEventListener("error", (error) => {
      reject(error);
    });
    reader.readAsDataURL(file);
  });
}
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (err) => {
      reject(err);
    };
    img.src = src;
  });
}

// src/utils/canvas.ts
var canvas_exports = {};
__export(canvas_exports, {
  emptyCanvas: () => emptyCanvas,
  flip: () => flip,
  fromFile: () => fromFile,
  fromImageLike: () => fromImageLike,
  isTainted: () => isTainted,
  rotate: () => rotate,
  thumbnail: () => thumbnail
});
function emptyCanvas(width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error("All arguments must be positive.");
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Context initialization failure.");
  }
  return { canvas, ctx };
}
function isTainted(ctx) {
  try {
    ctx.getImageData(0, 0, 1, 1);
  } catch (e) {
    return true;
  }
  return false;
}
function flip(input, vertical = false) {
  const { width, height } = input;
  const { canvas, ctx } = emptyCanvas(width, height);
  if (vertical) {
    ctx.translate(0, height);
    ctx.scale(1, -1);
  } else {
    ctx.translate(width, 0);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(input, 0, 0, width, height);
  return canvas;
}
function thumbnail(input, maxSize, cover = false) {
  let scale = 1;
  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;
  if (cover) {
    if (input.width > input.height) {
      scale = maxSize / input.height;
      width = input.width * scale;
      height = maxSize;
      x = -1 * (width - maxSize) / 2;
    } else {
      scale = maxSize / input.width;
      width = maxSize;
      height = input.height * scale;
      y = -1 * (height - maxSize) / 2;
    }
    width = maxSize;
    height = maxSize;
  } else {
    scale = Math.min(Math.min(maxSize / input.width, maxSize / input.height), 1);
    width = input.width * scale;
    height = input.height * scale;
  }
  const { canvas, ctx } = emptyCanvas(width, height);
  ctx.drawImage(input, x, y, width, height);
  return canvas;
}
function rotate(input, rad) {
  let angle = rad % (Math.PI * 2);
  if (angle > Math.PI / 2) {
    if (angle <= Math.PI) {
      angle = Math.PI - angle;
    } else if (angle <= Math.PI * 3 / 2) {
      angle = angle - Math.PI;
    } else {
      angle = Math.PI * 2 - angle;
    }
  }
  const width = input.width * Math.cos(angle) + input.height * Math.cos(Math.PI / 2 - angle);
  const height = input.width * Math.sin(angle) + input.height * Math.sin(Math.PI / 2 - angle);
  const { canvas, ctx } = emptyCanvas(width, height);
  ctx.save();
  ctx.translate(width / 2, height / 2);
  ctx.rotate(rad);
  ctx.drawImage(input, -input.width / 2, -input.height / 2);
  ctx.restore();
  return canvas;
}
function fromImageLike(imageLike) {
  if (imageLike instanceof HTMLImageElement && !imageLike.complete && imageLike.naturalWidth === 0) {
    throw new Error("Image is not fully loaded.");
  } else if (imageLike instanceof HTMLVideoElement && (imageLike.readyState < 2 || imageLike.ended)) {
    throw new Error("Video stream is not fully loaded.");
  }
  let width = imageLike.width;
  let height = imageLike.height;
  if (imageLike instanceof HTMLVideoElement) {
    width = imageLike.videoWidth;
    height = imageLike.videoHeight;
  } else if (imageLike instanceof HTMLImageElement) {
    width = imageLike.naturalWidth;
    height = imageLike.naturalHeight;
  }
  const { canvas, ctx } = emptyCanvas(width, height);
  ctx.drawImage(imageLike, 0, 0, width, height);
  if (isTainted(ctx)) {
    throw new Error(
      "Canvas is tainted. Images must be from the same origin or current host must be specified in Access-Control-Allow-Origin."
    );
  }
  return canvas;
}
function fromFile(file) {
  return __async(this, null, function* () {
    const url = yield fileToDataURL(file);
    if (url) {
      const image = yield loadImage(url);
      return fromImageLike(image);
    } else {
      throw new Error("Unable to load the image.");
    }
  });
}

// src/ImTool.ts
var ImTool = class {
  constructor(image) {
    this.outputType = "image/jpeg";
    this.outputQuality = 0.7;
    this.canvas = fromImageLike(image);
    this.originalWidth = this.canvas.width;
    this.originalHeight = this.canvas.height;
  }
  get width() {
    return this.canvas.width;
  }
  get height() {
    return this.canvas.height;
  }
  crop(x, y, width, height) {
    const { canvas, ctx } = emptyCanvas(width, height);
    ctx.drawImage(this.canvas, -x, -y, this.canvas.width, this.canvas.height);
    this.canvas = canvas;
    return this;
  }
  scale(width, height) {
    const { canvas, ctx } = emptyCanvas(width, height);
    ctx.drawImage(this.canvas, 0, 0, width, height);
    this.canvas = canvas;
    return this;
  }
  flip(vertical = false) {
    this.canvas = flip(this.canvas, vertical);
    return this;
  }
  flipH() {
    return this.flip(false);
  }
  flipV() {
    return this.flip(true);
  }
  thumbnail(maxSize, cover = false) {
    this.canvas = thumbnail(this.canvas, maxSize, cover);
    return this;
  }
  rotate(rad) {
    this.canvas = rotate(this.canvas, rad);
    return this;
  }
  rotateDeg(degrees) {
    return this.rotate(degrees * Math.PI / 180);
  }
  background(color) {
    const { width, height } = this.canvas;
    const { canvas, ctx } = emptyCanvas(width, height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(this.canvas, 0, 0, width, height);
    this.canvas = canvas;
    return this;
  }
  type(type) {
    this.outputType = type;
    return this;
  }
  quality(quality) {
    this.outputQuality = quality;
    return this;
  }
  toBlob() {
    return new Promise((resolve, reject) => {
      try {
        this.canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Blob unavailable."));
            } else {
              resolve(blob);
            }
          },
          this.outputType,
          this.outputQuality
        );
      } catch (e) {
        reject(e);
      }
    });
  }
  toBlobURL() {
    return __async(this, null, function* () {
      return URL.createObjectURL(yield this.toBlob());
    });
  }
  toDataURL() {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.canvas.toDataURL(this.outputType, this.outputQuality));
      } catch (e) {
        reject(e);
      }
    });
  }
  toCanvas() {
    return new Promise((resolve) => {
      const { width, height } = this.canvas;
      const { canvas, ctx } = emptyCanvas(width, height);
      ctx.drawImage(this.canvas, 0, 0, width, height);
      resolve(canvas);
    });
  }
  toImage() {
    return __async(this, null, function* () {
      const url = yield this.toDataURL();
      return yield loadImage(url);
    });
  }
  toDownload(name) {
    return __async(this, null, function* () {
      const url = yield this.toDataURL();
      const element = document.createElement("a");
      element.setAttribute("href", url);
      element.setAttribute("download", name);
      element.style.display = "none";
      element.click();
    });
  }
  toFile(name) {
    return __async(this, null, function* () {
      const blob = yield this.toBlob();
      return new File([blob], name);
    });
  }
};

// src/index.ts
function fromCanvas(canvas) {
  return Promise.resolve(new ImTool(canvas));
}
function fromVideo(video) {
  return Promise.resolve(new ImTool(video));
}
function fromMediaStream(stream) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.srcObject = stream;
    video.play();
    video.addEventListener("playing", () => __async(this, null, function* () {
      const tool = yield fromVideo(video);
      video.srcObject = null;
      stream.getTracks().forEach((track) => track.stop());
      resolve(tool);
    }));
    video.addEventListener("error", (e) => {
      reject(e);
    });
  });
}
function fromImage(image) {
  return __async(this, null, function* () {
    let url;
    if (typeof image === "string") {
      url = image;
    } else if (image instanceof Blob) {
      url = yield fileToDataURL(image);
    } else if (image instanceof HTMLImageElement) {
      if (image.complete && image.naturalWidth === 0) {
        return Promise.resolve(new ImTool(image));
      } else {
        url = image.src;
      }
    }
    if (url) {
      const img = yield loadImage(url);
      return new ImTool(img);
    } else {
      throw new Error("Unable to load the image.");
    }
  });
}
function fromScreen() {
  return __async(this, null, function* () {
    var _a;
    if (!((_a = navigator.mediaDevices) == null ? void 0 : _a.getDisplayMedia)) {
      throw new Error("Screen capture is not supported in this browser.");
    }
    const stream = yield navigator.mediaDevices.getDisplayMedia({
      video: true
    });
    if (!stream) {
      throw new Error("Unable to start screen capture.");
    }
    return yield fromMediaStream(stream);
  });
}
function fromWebcam() {
  return __async(this, null, function* () {
    var _a;
    if (!((_a = navigator.mediaDevices) == null ? void 0 : _a.getUserMedia)) {
      throw new Error("Webcam capture is not supported in this browser.");
    }
    const stream = yield navigator.mediaDevices.getUserMedia({
      video: true
    });
    if (!stream) {
      throw new Error("Unable to start webcam capture.");
    }
    return yield fromMediaStream(stream);
  });
}
export {
  canvas_exports as canvas,
  fromCanvas,
  fromImage,
  fromMediaStream,
  fromScreen,
  fromVideo,
  fromWebcam
};
