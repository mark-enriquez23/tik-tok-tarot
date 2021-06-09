function page(path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', redirect: 'landing' },
  { path: '/landing', name: 'welcome', component: page('welcome.vue') },
  { path: '/test-video/:roomName', name: 'video-room', component: page('video/VideoChat.vue') },
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
  { path: '/register/:referral?', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },
  { path: '/reader/home', name: 'home', component: page('reader/home.vue'),
    meta          : {
      requiresAuth: true,
      role        : [2],
      title       : 'Home'
    }
  },
  { path: '/user/verify', name: 'user.verify', component: page('user/verify.vue') },
  {
    path: '/settings',
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
  {
    path: '/admin/readers', name: 'admin.readers', component: page('admin/reader/reader-list.vue'),
    meta          : {
      requiresAuth: true,
      role        : [1],
      title       : 'Readers'
    }
  },

  {
    path: '/admin/freebie', name: 'admin.freebie', component: page('admin/freebie/'),
    meta          : {
      requiresAuth: true,
      role        : [1],
      title       : 'Freebie'
    }
  },

  {
    path: '/admin/reader-form/:id', name: 'admin.reader-form', component: page('admin/reader/reader-form.vue'),
    meta          : {
      requiresAuth: true,
      role        : [1],
      title       : 'Reader'
    }
  },

  // uploa approval
  {
    path: '/admin/upload-approvals', name: 'admin.upload-approvals', component: page('admin/video-approval-tool/approval-list.vue'),
    meta          : {
      requiresAuth: true,
      role        : [1],
      title       : 'Vlog Approvals'
    }
  },
  {
    path: '/admin/upload-approval/:id', name: 'admin.upload-approval', component: page('admin/video-approval-tool/approval-form.vue'),
    meta          : {
      requiresAuth: true,
      role        : [1],
      title       : 'Vlog Approval'
    }
  },
  {
    path: '/admin/user-credits', name: 'admin.user-credits', component: page('admin/credit/credit-list.vue'),
    meta          : {
      requiresAuth: true,
      role        : [1],
      title       : 'Credits'
    }
  },
  {
    path: '/admin/user-credit/:id', name: 'admin.user-credit', component: page('admin/credit/credit-form.vue'),
    meta          : {
      requiresAuth: true,
      role        : [1],
      title       : 'Credit'
    }
  },
  {
    path: '/admin/psychics', name: 'admin.psychics', component: page('admin/psychic/psychic-list.vue'),
    meta          : {
      requiresAuth: true,
      role        : [1],
      title       : 'Psychic'
    }
  },
  ,
  {
    path: '/admin/psychic-profile/:id', name: 'admin.psychic-profile', component: page('admin/psychic/psychic-profile.vue'),
    meta          : {
      requiresAuth: true,
      role        : [1],
      title       : 'Psychic Profile'
    }
  },
  {
    path: '/client/history', name: 'client.history', component: page('client/history/history-list.vue'),
    meta          : {
      requiresAuth: true,
      role        : [3],
      title       : 'Clients'
    }
  },
  {
    path: '/client/credit', name: 'client.credit', component: page('client/credit/'),
    meta          : {
      requiresAuth: true,
      role        : [3],
      title       : 'Clients'
    }
  },
  {
    path: '/client/notification', name: 'client.notification', component: page('client/notification/notification.vue'),
    meta          : {
      requiresAuth: true,
      role        : [3],
      title       : 'Clients'
    }
  },
  {
    path: '/client/referrals', name: 'client.referrals', component: page('client/referral/referral.vue'),
    meta          : {
      requiresAuth: true,
      role        : [3],
      title       : 'Clients'
    }
  },
  {
    path: '/reader/referrals', name: 'reader.referrals', component: page('reader/referral/referral.vue'),
    meta          : {
      requiresAuth: true,
      role        : [2],
      title       : 'Readers'
    }
  },
  {
    path: '/reader/videos', name: 'reader.videos', component: page('reader/videos/videos.vue'),
    meta          : {
      requiresAuth: true,
      role        : [2],
      title       : 'Readers'
    }
  },
  {
    path: '/reader/pending', name: 'reader.pending', component: page('reader/videos/pending.vue'),
    meta          : {
      requiresAuth: true,
      role        : [2],
      title       : 'Readers'
    }
  },
  {
    path: '/reader/rejected', name: 'reader.rejected', component: page('reader/videos/rejected.vue'),
    meta          : {
      requiresAuth: true,
      role        : [2],
      title       : 'Readers'
    }
  },
  {
    path: '/reader/upload-video', name: 'reader.upload-video', component: page('reader/videos/upload-video.vue'),
    meta          : {
      requiresAuth: true,
      role        : [2],
      title       : 'Readers'
    }
  },
  {
    path: '/reader/go-live/:roomName', name: 'reader.go-live', component: page('reader/live/go-live.vue'),
  },
  { path: '*', component: page('errors/404.vue') }
]
