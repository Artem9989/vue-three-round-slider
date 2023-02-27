import base from './rollup.config.base'
import pkg from '../package.json'

const config = Object.assign({}, base, {
  output: Object.assign({}, base.output, {
    file: pkg.main,
    format: 'umd'
  }),
})

export default config
