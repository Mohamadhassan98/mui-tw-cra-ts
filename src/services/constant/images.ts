import {imagesProxy} from "@util/proxies/imagesProxy";

const imagesBasePath = "/images/";

const imagesInnerPaths = {
  base: "",
  icons: "icons",
  mock: "mock",
};

const base = {
  background: "background.png",
};

const icons = {
  about: "about.svg",
};

const mock = {
  ad1: "Ad1.png",
};



const allImages = {
  base,
  icons,
  mock,
};

export const images = imagesProxy(imagesBasePath, allImages, imagesInnerPaths);
