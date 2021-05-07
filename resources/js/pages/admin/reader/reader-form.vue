<template>
  <card class="py-3 m-4">
    <div class="row">
      <div class="col-md-8">
        <h4 class="mb-3">Update Reader Profile</h4>
        <p class="mb-5">Change personal information here.</p>
      </div>
      <div class="col-md-4 text-right">
        <button class="btn btn-danger btn-lg" @click="goBack">Back</button>
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
        <input  v-model="readerForm.username" :class="{ 'is-invalid': readerForm.errors.has('username') }" class="form-control" type="text" name="username" :readonly="!isUpdating">
        <has-error :form="readerForm" field="username" />
      </div>

      <!-- First Name -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('First Name') }}</label>
        <input  v-model="readerForm.firstName" :class="{ 'is-invalid': readerForm.errors.has('firstName') }" class="form-control" type="text" name="firstName" :readonly="!isUpdating">
        <has-error :form="readerForm" field="firstName" />
      </div>

      <!-- Last Name -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('Last Name') }}</label>
        <input  v-model="readerForm.lastName" :class="{ 'is-invalid': readerForm.errors.has('lastName') }" class="form-control" type="text" name="lastName" :readonly="!isUpdating">
        <has-error :form="readerForm" field="lastName" />
      </div>

      <!-- <div class="form-group col-md-7 mx-auto">
        <label>Gender</label>
          <select id="gender" class="form-control"  v-model="form.gender" required>
            <option :value="gender.id"
              v-for="(gender) in gender"
              :key="gender.id"
              :readonly="!isUpdating">
              {{ gender.name }}
            </option>
          </select>
       <has-error :form="form" field="gender" />
      </div> -->

      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('Address') }}</label>
        <input  v-model="readerForm.address" :class="{ 'is-invalid': readerForm.errors.has('address') }" class="form-control" type="text" name="address" :readonly="!isUpdating">
        <has-error :form="readerForm" field="address" />
      </div>

      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('State/Province') }}</label>
        <input  v-model="readerForm.state" :class="{ 'is-invalid': readerForm.errors.has('state') }" class="form-control" type="text" name="state" :readonly="!isUpdating">
        <has-error :form="readerForm" field="state" />
      </div>

      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('ZIP/Postal Code') }}</label>
        <input  v-model="readerForm.zip" :class="{ 'is-invalid': readerForm.errors.has('zip') }" class="form-control" type="text" name="zip" :readonly="!isUpdating">
        <has-error :form="readerForm" field="zip" />
      </div>

      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('Country') }}</label>
        <input  v-model="readerForm.country" :class="{ 'is-invalid': readerForm.errors.has('country') }" class="form-control" type="text" name="country" :readonly="!isUpdating">
        <has-error :form="readerForm" field="country" />
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
        <label>{{ $t('email') }}</label>
        <input  v-model="readerForm.email" :class="{ 'is-invalid': readerForm.errors.has('email') }" class="form-control" type="text" name="email" :readonly="!isUpdating">
        <has-error :form="readerForm" field="email" />
      </div>
      

      <div class="form-group col-md-7 mx-auto">
        <label>Banned?</label>
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
        <label>Visible?</label>
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
        <label>Approved?</label>
        <InputSwitch v-model="sync_approved"  class="mr-2" :disabled="!isUpdating" />
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
import InputSwitch from 'primevue/inputswitch';

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {
    InputSwitch
  },

  data: () => ({
    isUpdating: false,
    sync_banned: false,
    sync_visible: false,
    sync_approved: false,
    gender: [
      {
        id: 0,
        name: 'Male'
      },
      {
        id: 1,
        name: 'Female'
      },
      {
        id: 2,
        name: 'Other'
      }
    ]
  }),

  computed: mapGetters({
    user: 'auth/user',
    readerForm: 'admin-reader/readerForm',
    is_banned: 'admin-reader/is_banned',
    visible: 'admin-reader/visible',
  }),

  beforeMount () {
    let id = this.$route.params.id
    this.$store.dispatch("admin-reader/viewReader", id).then(()=>{
      console.log(this.readerForm.is_banned)
      this.sync_banned = this.readerForm.is_banned === 1 ? true : false
      console.log(this.sync_banned)
      this.sync_visible = this.readerForm.visible === 1 ? true : false
      this.sync_approved = this.readerForm.is_approved === "APPROVED" ? true : false
    });
  },

  methods: {
    async update () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You are about to update this reader",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then((result) => {
        console.log(result.value);
        if (result.value) {
          console.log(this.sync_banned);
          if (this.sync_banned == 0 || this.sync_banned == false)
            this.readerForm.is_banned = 0;
          else if (this.sync_banned == 1 || this.sync_banned == true)
            this.readerForm.is_banned = 1;
          

          console.log(this.visible);
          if (this.sync_visible == 1 || this.sync_visible == true)
            this.readerForm.visible = 1;
          else if (this.sync_visible == 0 || this.sync_visible == false)
            this.visible = 0;
          
          if (this.sync_approved == 0 || this.sync_approved == false)
            this.readerForm.is_approved = "REJECTED";
          else if (this.sync_approved == 1 || this.sync_approved == true)
            this.readerForm.is_approved = "APPROVED";
          
          this.$store.dispatch('admin-reader/editReader', this.readerForm).then(({success, message}) => {
          if (success) {
            swalSuccess("Reader Updated").then(() =>{
               this.isUpdating = false;
            })
          }
        })
        }
      })
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
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        console.log(result);
        if (result.value) {
          this.$store.dispatch('admin-reader/removeReader', this.readerForm.id).then(({success, message}) => {
          if (success) {
            swalSuccess("Reader removed!").then(() =>{
              this.$router.push({ name: 'admin.readers' })
            })
          }
        })
        }
      })
    },   

    goBack(){
      this.$router.back()
    }
  }
}
</script>
