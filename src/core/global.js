import config from './config'
import { emitter } from '@/utils/bus.js'

const closeThisPage = () => {
  emitter.emit('closeThisPage')
}

export const register = (app) => {
  app.config.globalProperties.$VUE_ADMIN = config
  app.config.globalProperties.$CloseThisPage = closeThisPage
}
