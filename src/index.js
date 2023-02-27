import RoundSlider from "./round-slider.vue";
     
// Install the components
export function install(Vue) {
  Vue.component("round-slider", RoundSlider);
}

// Expose the components
export { RoundSlider };

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

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
// Import vue component
import component from './round-slider.vue';

// install function executed by Vue.use()
const install = function installRoundSlider(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('RoundSlider', component);
};

// // Create module definition for Vue.use()
// const plugin = {
//   // eslint-disable-next-line no-undef
//   version: VERSION,
//   name: component.name,
//   install,
// };
// // eslint-disable-next-line no-undef
// component.version = VERSION;

// // To auto-install on non-es builds, when vue is found
// // eslint-disable-next-line no-redeclare
// /* global window, global */
// let GlobalVue = null;
// if (typeof window !== 'undefined') {
//   GlobalVue = window.Vue;
// } else if (typeof global !== 'undefined') {
//   GlobalVue = global.Vue;
// }
// if (GlobalVue) {
//   GlobalVue.use(plugin);
// }

// // Inject install function into component - allows component
// // to be registered via Vue.use() as well as Vue.component()
// component.install = install;

// // Export component by default
// export default component;

// // It's possible to expose named exports when writing components that can
// // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// // export const RollupDemoDirective = component;
