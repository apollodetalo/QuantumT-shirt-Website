import { proxy } from "valtio";
const state = proxy({
  intro: true,
  color: "#039c43",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
