function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', redirect: 'landing' },
  { path: '/landing', name: 'welcome', component: page('welcome.vue') },
  { path: '/prices', name: 'prices', component: page('pricing.vue') },
  { path: '/readers', name: 'readers', component: page('readers.vue') },
  { path: '/search', name: 'search', component: page('search.vue') },
  { path: '/sessions', name: 'sessions', component: page('sessions.vue') },
  { path: '/vlogs/list', name: 'vlogs.list', component: page('vlogs/vlogs.vue') },
  { path: '/vlogs/view', name: 'vlog.view', component: page('vlogs/vlog-post.vue') },
  { path: '/vlogs/review', name: 'vlogs.review', component: page('vlogs/vlog-review.vue') },
  { path: '/testimonials', name: 'testimonials', component: page('welcome.vue') },
  { path: '/about-us', name: 'about.us', component: page('about-us.vue') },
  { path: '/contact-us', name: 'contact.us', component: page('contact-us.vue') },
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

  // Reader
  { path: '/reader/vlog', name: 'reader.vlog', component: page('reader/vlog/index.vue') },

  // Admin
  { path: '/admin/readers', name: 'admin.readers', component: page('admin/reader-list.vue') },
  { path: '/admin/reader-form/:id', name: 'admin.reader-form', component: page('admin/reader-form.vue') },

  { path: '*', component: page('errors/404.vue') }
]
