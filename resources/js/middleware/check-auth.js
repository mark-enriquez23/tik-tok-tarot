import store from '~/store'

export default async (to, from, next) => {
  console.log('check auth')
  if (!store.getters['auth/check'] && store.getters['auth/token']) {
    try {
      await store.dispatch('auth/fetchUser').then(() => {
        if (store.getters['auth/user'].is_verified === 0) {
          next({ name: 'user.verify' })
        } else {
          next()
        }
      })
    } catch (e) {
      next({ name: 'login' })
    }
  } else {
    next()
  }
}
