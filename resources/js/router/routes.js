function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') },
  { path: '/prices', name: 'prices', component: page('welcome.vue') },
  { path: '/vlogs/list', name: 'vlogs.list', component: page('welcome.vue') },
  { path: '/vlogs/review', name: 'vlogs.review', component: page('welcome.vue') },
  { path: '/testimonials', name: 'testimonials', component: page('welcome.vue') },
  { path: '/about-us', name: 'about.us', component: page('welcome.vue') },
  { path: '/contact-us', name: 'contact.us', component: page('welcome.vue') },
  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },
  { path: '/home', name: 'home', component: page('home.vue') },
  { path: '/user/verify', name: 'user.verify', component: page('user/verify.vue') },
  { path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '**', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'security', name: 'settings.security', component: page('settings/security-question.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ]
  },

  { path: '*', component: page('errors/404.vue') }
]
