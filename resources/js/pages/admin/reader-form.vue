<template>
  <card class="py-3 m-4">
    <div class="row">
      <div class="col-md-8">
        <h4 class="mb-3">Update Reader Profile</h4>
        <p class="mb-5">Change personal information here.</p>
      </div>
      <div class="col-md-4 text-right">
        <router-link :to="{ name: 'admin.readers' }" class="nav-link" active-class="active">
          <v-button class="btn btn-danger btn-lg">Back</v-button>
        </router-link>
      </div>
    </div>
    <hr>
    <form @submit.prevent="update" @keydown="readerForm.onKeydown($event)">
      <alert-success :form="readerForm" message="Reader info has been updated!" />

      <!-- Username -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('username') }}</label>
        <input  v-model="readerForm.username" :class="{ 'is-invalid': readerForm.errors.has('username') }" class="form-control" type="text" name="username" :readonly="!isUpdating">
        <has-error :form="readerForm" field="username" />
      </div>

      <!-- Name -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('name') }}</label>
        <input  v-model="readerForm.name" :class="{ 'is-invalid': readerForm.errors.has('name') }" class="form-control" type="text" name="name" :readonly="!isUpdating">
        <has-error :form="readerForm" field="name" />
      </div>

      <!-- Phone Number -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('phone_number') }}</label>
        <input  v-model="readerForm.phone_number" :class="{ 'is-invalid': readerForm.errors.has('phone_number') }" class="form-control" type="text" name="phone_number" :readonly="!isUpdating">
        <has-error :form="readerForm" field="phone_number" />
      </div>

      <!-- Email -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('email') }}</label>
        <input  v-model="readerForm.email" :class="{ 'is-invalid': readerForm.errors.has('email') }" class="form-control" type="text" name="email" :readonly="!isUpdating">
        <has-error :form="readerForm" field="email" />
      </div>
      <div class="form-group col-md-7 mx-auto">
        <label>Banning</label>
        <toggle-button :value="is_banned == 1 ? true : false"
               :labels="{checked: 'Ban', unchecked: 'Unban'}"
                :height=32       
                :width=75
                class="mr-2"
                :disabled="!isUpdating"
                @change="isBannedChange"
                color="#bd2130"
        />
        <label>Visibility</label>
        <toggle-button :value="visible == 1 ? true : false"
               :labels="{checked: 'Visible', unchecked: 'Hidden'}"
                :height=32
                :width=80
                :disabled="!isUpdating"
                @change="isVisibleChange"
        />
      </div>

      <!-- Submit Button -->
       <div class="form-group row col-md-7 mx-auto mt-3">
        <div class="col-md-6 px-0 pr-lg-1"  v-if="isUpdating">
          <!-- Bac Button -->
          <button type="button" class="btn btn-secondary w-100" @click.prevent="cancelUpdate()"  >
          <!-- <v-button :loading="form.busy"> -->
          Cancel
          </button>
        </div>
        <div class="col-md-6 px-0 pr-lg-1"  v-else>
          <!-- Bac Button -->
          <button type="button" class="btn btn-danger w-100" @click.prevent="removeAccount()"  >
          <!-- <v-button :loading="form.busy"> -->
          Remove Account
          </button>
        </div>
        <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
          <!-- Update Button -->
          <button class="btn btn-primary w-100" @click.prevent="isUpdating = true"  v-if="!isUpdating">
            {{ $t('update') }}
          </button>
          <v-button class="btn btn-primary w-100"  v-else>
            Confirm
          </v-button>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import { swalOops, swalSuccess } from "~/helpers"
import Swal from 'sweetalert2';

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {
  },

  data: () => ({
    isUpdating: false,
  }),

  computed: mapGetters({
    user: 'auth/user',
    readerForm: 'admin-reader/readerForm',
    is_banned: 'admin-reader/is_banned',
    visible: 'admin-reader/visible',
  }),

  beforeMount () {
    let id = this.$route.params.id
    this.$store.dispatch("admin-reader/viewReader", id);

    this.$store.dispatch('auth/fetchUser');
      if (!this.user){
        this.$router.push({ name: 'home' })
      }
  },

  methods: {
    async update () {
      this.readerForm.is_banned = this.is_banned;
      this.readerForm.visible = this.visible;

      const { data } = await this.readerForm.post('/api/auth-reader/update-reader')
 
      this.$store.dispatch('admin-reader/editReader', data.data)
      this.isUpdating = false;
    },

    cancelUpdate() {
      this.readerForm.keys().forEach(key => {
        this.readerForm[key] = this.user[key]
      })
      this.isUpdating = false;
    },

    removeAccount(){
     Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Remove'
      })
      .then((result) => {
        this.$store.dispatch('admin-reader/removeReader', this.readerForm.id).then(({success, message}) => {
          if (success) {
            swalSuccess("Reader removed!").then(() =>{
              this.$router.push({ name: 'admin.readers' })
            })
          }
        })
      })
    },

    

    isBannedChange(){
      this.$store.dispatch('admin-reader/isBannedChange')
      console.log('changing')
    },

    isVisibleChange(){
      this.$store.dispatch('admin-reader/isVisibleChange')
    }
  }
}
</script>
