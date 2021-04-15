<template>
  <card class="py-3">
    <h4 class="mb-0">Update Reader Profile</h4>
    <p class="mb-0">Change personal information here.</p>
    <hr>
    <form @submit.prevent="update" @keydown="readerForm.onKeydown($event)">
      <alert-success :form="readerForm" message="reader infor has been updated" />

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

      <!-- Submit Button -->
       <div class="form-group row col-md-7 mx-auto mt-3">
        <div class="col-md-6 px-0 pr-lg-1"  v-if="isUpdating">
          <!-- Bac Button -->
          <button type="button" class="btn btn-secondary w-100" @click.prevent="cancelUpdate()"  >
          <!-- <v-button :loading="form.busy"> -->
          Cancel
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

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    isUpdating: false
  }),

  computed: mapGetters({
    user: 'auth/user',
    readerForm: 'admin-reader/readerForm'
  }),

  beforeMount () {
    let id = this.$route.params.id
    this.$store.dispatch("admin-reader/viewReader", id);
  },

  methods: {
    async update () {

      const { data } = await this.readerForm.post('/api/auth-reader/update-reader')
        console.log(data)
    //   this.$store.dispatch('auth/updateUser', { user: data })
      this.isUpdating = false;
    },

    cancelUpdate() {
      this.readerForm.keys().forEach(key => {
        this.readerForm[key] = this.user[key]
      })
      this.isUpdating = false;
    }
  }
}
</script>
