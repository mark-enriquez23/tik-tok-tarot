import store from '~/store'

export default async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresVerification)) {
    if (!store.getters['auth/check']) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else if (store.getters['auth/user'].is_verified === 0) {
      next({ name: 'user.verify' })
    } else {
      next()
    }
    if (to.matched.some(record => record.meta.role)) {
      const currentRole = store.getters['auth/user'].role_id

      if (to.meta.role !== currentRole) {
        if (currentRole === 1) {
          next({ path: '/admin/readers' })
        } else if (currentRole === 2) {
          next({ path: '/reader/videos' })
        } else if (currentRole === 3) {
          next({ path: '/landing' })
        } else {
          next()
        }
      } else {
        next()
      }
    }
  } else {
    next()
  }
}
