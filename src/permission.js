// import '@/components/NProgress/nprogress.css' // progress bar custom style
import NProgress from 'nprogress' // progress bar
import router from './router'
import store from './store'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  store.dispatch('GenerateRoutes', {  }).then(() => {
    router.addRoutes(store.getters.addRouters)
  })
})
router.afterEach(() => {
  NProgress.done()
})