import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import { eslint } from 'rollup-plugin-eslint'
import postcss from 'rollup-plugin-postcss'
import pkg from '../package.json'
import bannerContent from './banner'

export default {
  input: 'src/index.js',
  output: {
    exports: 'named',
    name: 'RoundSlider',
    globals: {
      'jquery': '$',
      'global': 'global',
    },
    banner: bannerContent
  },
  external: ['vue', 'jquery'],
  plugins: [
    postcss(),
    resolve(),
    eslint(),
    vue({
      target: 'browser',
      css: false,
      exposeFilename: false,
      preprocessStyles: true,
      template: {
        isProduction: true
      }
    }),
    buble({
      transforms: { dangerousForOf: true },
    }),
    replace({
      VERSION: JSON.stringify(pkg.version),
    }),
    commonjs(),
  ],
}
