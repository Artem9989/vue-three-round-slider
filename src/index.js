/* global global*/
import RoundSlider from "./round-slider.vue";

// Define the install function
const install = function (Vue) {
  Vue.component("round-slider", RoundSlider);
};

// Expose the components
export { RoundSlider };

/* -- Plugin definition & Auto-install -- /
/ You shouldn't have to modify the code below */

// Plugin
const plugin = { install };

export default plugin;

// Auto-install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Define the install function for Vue.use()
install.installRoundSlider = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('RoundSlider', RoundSlider);
};