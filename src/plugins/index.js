import router from './router'
import prime from './prime'

export default {
  install(app) {
    app.use(router)
    app.use(prime)
  },
}
