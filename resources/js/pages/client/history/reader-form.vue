<template>
  <card class="py-3 m-4">
    <div class="row">
      <div class="col-md-8">
        <h4 class="mb-3">
          Update Reader Profile
        </h4>
        <p class="mb-5">
          Change personal information here.
        </p>
      </div>
      <div class="col-md-4 text-right">
        <button class="btn btn-danger btn-lg" @click="goBack">
          Back
        </button>
        <!-- <router-link :to="{ name: 'admin.readers' }" class="nav-link" active-class="active">
          <v-button class="btn btn-danger btn-lg">Back</v-button>
        </router-link> -->
      </div>
    </div>
    <hr>
    <form @submit.prevent="update" @keydown="readerForm.onKeydown($event)">
      <!-- <alert-success :form="readerForm" message="Reader info has been updated!" /> -->

      <!-- Username -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('username') }}</label>
        <input v-model="readerForm.username" :class="{ 'is-invalid': readerForm.errors.has('username') }" class="form-control" type="text" name="username" :readonly="!isUpdating">
        <has-error :form="readerForm" field="username" />
      </div>

      <!-- Name -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('name') }}</label>
        <input v-model="readerForm.name" :class="{ 'is-invalid': readerForm.errors.has('name') }" class="form-control" type="text" name="name" :readonly="!isUpdating">
        <has-error :form="readerForm" field="name" />
      </div>

      <!-- Phone Number -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('phone_number') }}</label>
        <input v-model="readerForm.phone_number" :class="{ 'is-invalid': readerForm.errors.has('phone_number') }" class="form-control" type="text" name="phone_number" :readonly="!isUpdating">
        <has-error :form="readerForm" field="phone_number" />
      </div>

      <!-- Email -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('email') }}</label>
        <input v-model="readerForm.email" :class="{ 'is-invalid': readerForm.errors.has('email') }" class="form-control" type="text" name="email" :readonly="!isUpdating">
        <has-error :form="readerForm" field="email" />
      </div>
      <div class="form-group col-md-7 mx-auto">
        <label>Banning</label>
        <InputSwitch v-model="sync_banned" class="mr-2" :disabled="!isUpdating" />
        <!-- <toggle-button
                :value="readerForm.is_banned == 1 ? true : false"
                :sync="sync_banned"
                :labels="{checked: 'Ban', unchecked: 'Unban'}"
                :height=32
                :width=75
                class="mr-2"
                :disabled="!isUpdating"
                @change="isBannedChange"
                color="#bd2130"
        /> -->
        <label>Visibility</label>
        <InputSwitch v-model="sync_visible" class="mr-2" :disabled="!isUpdating" />
        <!-- <toggle-button
                :value="readerForm.visible == 1 ? true : false"
                :sync="sync_visible"
                :labels="{checked: 'Visible', unchecked: 'Hidden'}"
                :height=32
                :width=80
                :disabled="!isUpdating"
                @change="isVisibleChange"
        /> -->
      </div>

      <!-- Submit Button -->
      <div class="form-group row col-md-7 mx-auto mt-3">
        <div v-if="isUpdating" class="col-md-6 px-0 pr-lg-1">
          <!-- Bac Button -->
          <button type="button" class="btn btn-secondary w-100" @click.prevent="cancelUpdate()">
            <!-- <v-button :loading="form.busy"> -->
            Cancel
          </button>
        </div>
        <div v-else class="col-md-6 px-0 pr-lg-1">
          <!-- Bac Button -->
          <button type="button" class="btn btn-danger w-100" @click.prevent="removeAccount()">
            <!-- <v-button :loading="form.busy"> -->
            Remove Account
          </button>
        </div>
        <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
          <!-- Update Button -->
          <button v-if="!isUpdating" class="btn btn-primary w-100" @click.prevent="isUpdating = true">
            {{ $t('update') }}
          </button>
          <v-button v-else class="btn btn-primary w-100">
            Confirm
          </v-button>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import { swalSuccess } from '~/helpers'
import Swal from 'sweetalert2'
import InputSwitch from 'primevue/inputswitch'

export default {
  scrollToTop: false,

  components: {
    InputSwitch
  },

  data: () => ({
    isUpdating: false,
    sync_banned: false,
    sync_visible: false
  }),

  computed: mapGetters({
    user: 'auth/user',
    readerForm: 'admin-reader/readerForm',
    is_banned: 'admin-reader/is_banned',
    visible: 'admin-reader/visible'
  }),

  beforeMount () {
    let id = this.$route.params.id
    this.$store.dispatch('admin-reader/viewReader', id).then(() => {
      this.sync_banned = this.readerForm.is_banned === 1
      this.sync_visible = this.readerForm.visible === 1
    })
  },

  methods: {
    async update () {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to update this reader',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then((result) => {
        if (result.value) {
          if (this.sync_banned === 0 || this.sync_banned === false) { this.readerForm.is_banned = 0 } else if (this.sync_banned === 1 || this.sync_banned === true) { this.readerForm.is_banned = 1 }

          if (this.sync_visible === 1 || this.sync_visible === true) { this.readerForm.visible = 1 } else if (this.sync_visible === 0 || this.sync_visible === false) { this.visible = 0 }

          this.$store.dispatch('admin-reader/editReader', this.readerForm).then(({ success, message }) => {
            if (success) {
              swalSuccess('Reader Updated').then(() => {
                this.isUpdating = false
              })
            }
          })
        }
      })
    },

    cancelUpdate () {
      this.readerForm.keys().forEach(key => {
        this.readerForm[key] = this.user[key]
      })
      this.isUpdating = false
    },

    removeAccount () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('admin-reader/removeReader', this.readerForm.id).then(({ success, message }) => {
            if (success) {
              swalSuccess('Reader removed!').then(() => {
                this.$router.push({ name: 'admin.readers' })
              })
            }
          })
        }
      })
    },

    isBannedChange () {
      this.sync_banned = false
      this.$store.dispatch('admin-reader/isBannedChange')
    },

    isVisibleChange () {
      this.sync_visible = false
      this.$store.dispatch('admin-reader/isVisibleChange')
    },

    goBack () {
      this.$router.back()
    }
  }
}
</script>
