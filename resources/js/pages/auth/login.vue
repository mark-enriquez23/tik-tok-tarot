<template>
  <div class="row h-100">
    <div class="col-lg-12 m-auto">
      <div>
        <div class="w-100 text-center mt-2 mb-4">
          <img :src="srcLogoOnly" style="mix-blend-mode: luminosity;" srcset="" class="img-fluid col-12 col-lg-4">
          <hr class="mx-auto line-form-break">
          <h4 >Log in</h4>
        </div>
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <!-- Email -->
          <div class="form-group col-md-7 mx-auto">
            <label>Username</label>
            <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="text" name="email">
            <has-error :form="form" field="email" />
          </div>

          <!-- Password -->
          <div class="form-group col-md-7 mx-auto">
            <label for="exampleInputEmail1">{{ $t('password') }}</label>
            <input  v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
              <has-error :form="form" field="password" />
          </div>

          <!-- Remember Me -->
          <div class="form-group row no-gutters col-md-7 mx-auto">
            <div class="col-md-12 d-flex">
              <checkbox v-model="remember" name="remember">
                {{ $t('remember_me') }}
              </checkbox>

              <router-link :to="{ name: 'password.request' }" class="small ml-auto my-auto">
                {{ $t('forgot_password') }}
              </router-link>
            </div>
          </div>
          <!-- HCaptcha -->
          <div class="form-group row col-md-7 mx-auto" v-if="!captchaDisabled">
            <div class="col-md-12 px-0">
              <vue-hcaptcha sitekey="3f7f821f-05b7-486b-a3d9-21395609a73e" @verify="isVerified"></vue-hcaptcha>
            </div>
          </div>

          <div class="form-group row col-md-7 mx-auto mt-3">
            <div class="col-md-12 px-0">
              <!-- Submit Button -->
              <v-button class="btn btn-primary w-100" :disabled="!captchaDisabled && !token" :loading="form.busy">
                {{ $t('login') }}
              </v-button>

              <!-- GitHub Login Button -->
              <login-with-github />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import LoginWithGithub from '~/components/LoginWithGithub'
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';
import Cookies from "js-cookie";
import { mapGetters } from 'vuex'

const initializeData = () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    token: '',
    captchaDisabled: true,
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    remember: false
  })

export default {
  layout: 'auth',
  middleware: 'guest',

  components: {
    LoginWithGithub,
    VueHcaptcha
  },

  computed: mapGetters({
    user: 'auth/user',
  }),

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => { return initializeData() },

  methods: {
    async login () {
      console.log('test')
      // Submit the form.
      await this.form.post('/api/login').then(res => {
        console.log(res)
        this.token = res.data.token
      }).catch((e) => {
        console.log()
        switch (e.response.status) {
          case 429:
            this.captchaDisabled = false;
            break;

          default:
            this.token = ''
            this.captchaDisabled = true;
            break;
        }
      })


      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: this.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      console.log(this.user);
      switch (this.user.role_id){
        case 1:
          this.$router.push({ name: 'admin.readers' });
          break;

        case 2:
           this.$router.push({ name: 'reader.videos' });
           break

        case 3:
            this.$router.push({ name: 'welcome' });
            break;
      }
      // if (this.user) {
      //   if (this.user.role_id == '1') {
      //     this.$router.push({ name: 'admin.readers' });
      //   }else if(this.user.role_id == '2'){
      //     this.$router.push({ name: 'home' })
      //   }
      // }

      
      
    },
    redirect()
    {
      const intendedUrl = Cookies.get("intended_url");
      console.log(intendedUrl)
      if (intendedUrl) {
        Cookies.remove("intended_url");
        this.$router.push({ path: intendedUrl });
      } else {
        // make a condition here and redirect user depends on their role
        this.$router.push({ name: 'admin.readers' });
      }
    },
    
    isVerified(e) {
      this.token = e;
    }
  }
}
</script>
