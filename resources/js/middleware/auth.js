import store from '~/store'

export default async (to, from, next) => {
  if (!store.getters['auth/check']) {
    next({ name: 'login' })
  }
  if (store.getters['auth/user'].is_verified === 0) {
    next({ name: 'user.verify' })
  } else {
    next()
  }
}
