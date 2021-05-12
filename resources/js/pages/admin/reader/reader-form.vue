<template>
  <card class="py-3 m-4">
    <div class="row">
      <div class="col-md-8">
        <h4 class="mb-3">Update Reader Profile</h4>
        <p class="mb-5">Change personal information here.</p>
      </div>
      <div class="col-md-4 text-right">
        <button class="btn btn-danger btn-lg" @click="goBack">Back</button>
      </div>
    </div>
    <hr>
    
    <h5 class="mb-3">Profile Photo</h5>
    <div class="">
      <img class="reader-img mx-auto" :src="additionalForm.profile_photo == ''? 'https://www.gravatar.com/avatar/69e607c9dfb0e95a6ee53ea55f47a507.jpg?s=200&d=mm': profile_photo">
    </div>

    <form @submit.prevent="updateProfile" @keydown="additionalForm.onKeydown($event)">
      <div class="row">      

        <div class="col-md-12">
          <!-- Username -->
          <div class="form-group col-md-10 mx-auto mx-auto  " hidden>
            <input :class="{ 'is-invalid': additionalForm.errors.has('profile_photo') }" class="form-control" type="file" name="profile_photo" @change="previewFile"  ref="file" accept="image/x-png,image/gif,image/jpeg">
            <has-error :form="additionalForm" field="profile_photo" />
          </div>
        </div>

         <!-- Submit Button -->
        <div class="form-group row col-md-4 mx-auto mt-3" v-if="isProfileUpdating">
          <div class="col-md-6 px-0 pr-lg-1"  >
            <!-- Bac Button -->
            <button type="button" class="btn btn-danger w-100" @click.prevent="cancelProfileUpdate()"  >
            <!-- <v-button :loading="form.busy"> -->
            Cancel
            </button>
          </div>

          <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
            <v-button class="btn btn-primary w-100" >
              Confirm
            </v-button>
          </div>
        </div>
        
        <div class="form-group row  col-md-4 mx-auto mt-3"  v-else>
          <div class="col-md-8 px-0 pr-lg-1 mx-auto"  >
            <!-- Bac Button -->
            <button type="button" class="btn btn-primary w-100" @click.prevent="clickFileInput">
            <!-- <v-button :loading="form.busy"> -->
            Update
            </button>
          </div>
        </div>

      </div>
    </form>


    <hr>


    
    <h5 class="mb-3">Account Information</h5>    

    <form @submit.prevent="update" @keydown="readerForm.onKeydown($event)">
      <div class="row">
        
        <div class="col-md-6">
          <!-- Username -->
          <div class="form-group col-md-10 mx-auto mx-auto  ">
            <label>{{ $t('username') }}</label>
            <input  v-model="readerForm.username" :class="{ 'is-invalid': readerForm.errors.has('username') }" class="form-control" type="text" name="username" :readonly="!isUpdating">
            <has-error :form="readerForm" field="username" />
          </div>

          <!-- First Name -->
          <div class="form-group col-md-10 mx-auto mx-auto  ">
            <label>{{ $t('First Name') }}</label>
            <input  v-model="readerForm.firstName" :class="{ 'is-invalid': readerForm.errors.has('firstName') }" class="form-control" type="text" name="firstName" :readonly="!isUpdating">
            <has-error :form="readerForm" field="firstName" />
          </div>

          <!-- Last Name -->
          <div class="form-group col-md-10 mx-auto mx-auto  ">
            <label>{{ $t('Last Name') }}</label>
            <input  v-model="readerForm.lastName" :class="{ 'is-invalid': readerForm.errors.has('lastName') }" class="form-control" type="text" name="lastName" :readonly="!isUpdating">
            <has-error :form="readerForm" field="lastName" />
          </div>

          <div class="form-group col-md-10 mx-auto">
            <label>Gender</label>
            <select id="gender" class="form-control" v-model="readerForm.gender" required :disabled="!isUpdating">
              <option :value="gender.name"
                v-for="(gender) in genders"
                :key="gender.name">
                {{ gender.name }}
              </option>
            </select>
            <has-error :form="readerForm" field="gender" />
          </div>     

        </div>
        
        <div class="col-md-6">
      
          <!-- Email -->
          <div class="form-group col-md-10 mx-auto">
            <label>{{ $t('email') }}</label>
            <input  v-model="readerForm.email" :class="{ 'is-invalid': readerForm.errors.has('email') }" class="form-control" type="text" name="email" :readonly="!isUpdating">
            <has-error :form="readerForm" field="email" />
          </div>

          <!-- Phone Number -->
          <div class="form-group col-md-10 mx-auto mx-auto  ">
            <label>{{ $t('Phone Number') }}</label>
            <input  v-model="readerForm.phone_number" :class="{ 'is-invalid': readerForm.errors.has('phone_number') }" class="form-control" type="text" name="phone_number" :readonly="!isUpdating">
            <has-error :form="readerForm" field="phone_number" />
          </div>

          <div class="form-group col-md-10 mx-auto ml-2">
            <label>Banned?</label>
            <InputSwitch v-model="sync_banned" class="mr-2" :disabled="!isUpdating" />
      
            <label>Visible?</label>
            <InputSwitch v-model="sync_visible" class="mr-2" :disabled="!isUpdating" />
    
            <label>Approved?</label>
            <InputSwitch v-model="sync_approved"  class="mr-2" :disabled="!isUpdating" />
          </div>

        </div>

        <!-- Submit Button -->
        <div class="form-group row  col-md-4 mx-auto mt-3">
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
      </div>
    </form>

    <hr class=" mt-5">
    <h5 class="mb-3">Additional Information</h5>
    <form @submit.prevent="updateAdditional" @keydown="additionalForm.onKeydown($event)">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group col-md-11 mx-auto">
            <label>{{ $t('Biography') }}</label>
            <textarea v-model="additionalForm.reader_bio" :class="{ 'is-invalid': additionalForm.errors.has('reader_bio') }" class="form-control" type="text" name="reader_bio" :readonly="!isAdditionalUpdating"></textarea>
            <has-error :form="additionalForm" field="reader_bio" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">   
          <div class="form-group col-md-10 mx-auto">
            <label>{{ $t('Category') }}</label>
            <select  v-model="additionalForm.expertise" :class="{ 'is-invalid': additionalForm.errors.has('expertise') }" class="form-control" type="text" name="expertise" :disabled="!isAdditionalUpdating">
              <option :value="category.name"
                v-for="(category) in categories"
                :key="category.name">
                {{ category.name }}
              </option>
            </select>
            <has-error :form="additionalForm" field="category" />
          </div>
           
          <div class="form-group col-md-10 mx-auto">
            <label>{{ $t('Birthdate') }}</label>
            <birth-datepicker  v-model="additionalForm.birthdate" :class="{ 'is-invalid': additionalForm.errors.has('birthdate') }" class="form-control" name="birthdate" valueIsString="true" :disabled="!isAdditionalUpdating" />
            <has-error :form="additionalform" field="birthdate" />
          </div>

          <div class="form-group col-md-10 mx-auto mx-auto  ">
            <label>{{ $t('ZIP/Postal Code') }}</label>
            <input  v-model="additionalForm.zip" :class="{ 'is-invalid': additionalForm.errors.has('zip') }" class="form-control" type="text" name="zip" :readonly="!isAdditionalUpdating">
            <has-error :form="additionalForm" field="zip" />
          </div>       

        </div>
        
        <div class="col-md-6">

          <div class="form-group col-md-10 mx-auto mx-auto  ">
            <label>{{ $t('Country') }}</label>
            <input  v-model="additionalForm.country" :class="{ 'is-invalid': additionalForm.errors.has('country') }" class="form-control" type="text" name="country" :readonly="!isAdditionalUpdating">
            <has-error :form="additionalForm" field="country" />
          </div>

          <div class="form-group col-md-10 mx-auto">
            <label>{{ $t('Address') }}</label>
            <input  v-model="additionalForm.address1" :class="{ 'is-invalid': additionalForm.errors.has('address1') }" class="form-control" type="text" name="address1" :readonly="!isAdditionalUpdating">
            <has-error :form="additionalForm" field="address1" />
          </div>

          <div class="form-group col-md-10 mx-auto mx-auto  ">
            <label>{{ $t('State/Province') }}</label>
            <input  v-model="additionalForm.state" :class="{ 'is-invalid': additionalForm.errors.has('state') }" class="form-control" type="text" name="state" :readonly="!isAdditionalUpdating">
            <has-error :form="additionalForm" field="state" />
          </div>

        
        
        </div>

        <!-- Submit Button -->
        <div class="form-group row  col-md-4 mx-auto mt-3" v-if="isAdditionalUpdating">
          <div class="col-md-6 px-0 pr-lg-1"  >
            <!-- Bac Button -->
            <button type="button" class="btn btn-danger w-100" @click.prevent="cancelAdditionalUpdate()"  >
            <!-- <v-button :loading="form.busy"> -->
            Cancel
            </button>
          </div>

          <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
            <v-button class="btn btn-primary w-100" >
              Confirm
            </v-button>
          </div>
        </div>
        
        <div class="form-group row  col-md-4 mx-auto mt-3"  v-else>
          <div class="col-md-8 px-0 pr-lg-1 mx-auto"  >
            <!-- Bac Button -->
            <button type="button" class="btn btn-primary w-100" @click.prevent="isAdditionalUpdating = true">
            <!-- <v-button :loading="form.busy"> -->
            Update
            </button>
          </div>
        </div>

      </div>
    </form>

    <hr class=" mt-5">
    <h5 class="mb-3">Update Password</h5>
    <form @submit.prevent="updatePassword" @keydown="additionalForm.onKeydown($event)">
      <div class="row">
        <div class="col-md-6">   
          
          <!-- Password -->
          <div class="form-group col-md-10 mx-auto mx-auto  ">
            <label>{{ $t('password') }}</label>
            <input  v-model="password" :class="{ 'is-invalid': additionalForm.errors.has('password') }" class="form-control" type="password" name="password" :readonly="!isPasswordUpdating">
            <has-error :form="additionalForm" field="password" />
          </div>

        </div>
        
        <div class="col-md-6">

          <!-- Confirm Password -->
          <div class="form-group col-md-10 mx-auto mx-auto  ">
            <label>{{ $t('Confirm Password') }}</label>
            <input  v-model="confirmPassword" :class="{ 'is-invalid': additionalForm.errors.has('confirm-password') }" class="form-control" type="password" name="confirmPassword" :readonly="!isPasswordUpdating">
            <has-error :form="additionalForm" field="confirmPassword" />
          </div>
        
        </div>

       
        <!-- Submit Button -->
        <div class="form-group row  col-md-4 mx-auto mt-3" v-if="isPasswordUpdating">
          <div class="col-md-6 px-0 pr-lg-1"  >
            <!-- Bac Button -->
            <button type="button" class="btn btn-danger w-100" @click.prevent="cancelPasswordUpdate()"  >
            <!-- <v-button :loading="form.busy"> -->
            Cancel
            </button>
          </div>

          <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
            <v-button class="btn btn-primary w-100" >
              Confirm
            </v-button>
          </div>
        </div>
        
        <div class="form-group row  col-md-4 mx-auto mt-3"  v-else>
          <div class="col-md-8 px-0 pr-lg-1 mx-auto"  >
            <!-- Bac Button -->
            <button type="button" class="btn btn-primary w-100" @click.prevent="isPasswordUpdating = true">
            <!-- <v-button :loading="form.busy"> -->
            Update
            </button>
          </div>
        </div>

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
import birthDatepicker from 'vue-birth-datepicker/src/birth-datepicker';
import myUpload from 'vue-image-crop-upload';
import bcrypt from 'bcryptjs';


export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {
    InputSwitch,
    birthDatepicker,
    'my-upload': myUpload
  },

  data: () => ({
    isUpdating: false,
    isAdditionalUpdating: false,
    isPasswordUpdating: false,
    isProfileUpdating: false,
    sync_banned: false,
    sync_visible: false,
    sync_approved: false,
    password:'',
    confirmPassword:'',
    genders: [
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
    ],
    categories: [
      {
        name: 'All'
      },
      {
        name: 'Numerology'
      },
      {
        name: 'Astrology'
      },
      {
        name: 'Tarot Reader'
      },
      {
        name: 'Clairvoyant'
      },
      {
        name: 'Love & Relationships'
      },
      {
        name: 'Career'
      },
      {
        name: 'Spiritual Healer'
      }
    ],
    show: false,
			params: {
				token: '123456798',
				name: 'avatar'
			},
			headers: {
				smail: '*_~'
			},
			imgDataUrl: '' // the datebase64 url of created image
  }),

  computed: mapGetters({
    user: 'auth/user',
    readerForm: 'admin-reader/readerForm',
    additionalForm: 'admin-reader/additionalForm',
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
    this.$store.dispatch("admin-reader/viewAdditional", id).then(()=>{
      console.log(this.additionalForm);
      this.profile_photo = this.additionalForm.profile_photo;
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

    async updateAdditional () {
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
          this.$store.dispatch('admin-reader/editAdditional', this.additionalForm).then(res => {
           // console.log(res);
            swalSuccess("Reader Updated").then(() =>{
               this.isAdditionalUpdating = false;
            })
          
        })
        }
      })
    },

     async updateProfile () {
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
        console.log(this.additionalForm);
        if (result.value) {
          this.$store.dispatch('admin-reader/editAdditional', this.additionalForm).then(res => {
           // console.log(res);
            swalSuccess("Reader Updated").then(() =>{
               this.isProfileUpdating = false;
            })
          
        })
        }
      })
    },

    async updatePassword () {
      if (this. password == this.confirmPassword){
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
          console.log(this.additionalForm)
          const salt = bcrypt.genSaltSync(10)
          this.additionalForm.password = bcrypt.hashSync(this.password, salt)
          this.$store.dispatch('admin-reader/editAdditional', this.additionalForm).then(res => {
           // console.log(res);
            swalSuccess("Reader Updated").then(() =>{
               this.isPasswordUpdating = false;
            })
        })
        }
      })
      }else{
         swalOops('Password not match')
      }      
    },

    cancelUpdate() {
      this.readerForm.keys().forEach(key => {
        this.readerForm[key] = this.user[key]
      })
      this.isUpdating = false;
    },

    cancelAdditionalUpdate() {
      // this.additionalForm.keys().forEach(key => {
      //   this.additionalForm[key] = this.user[key]
      // })
      this.isAdditionalUpdating = false;
    },

    cancelPasswordUpdate() {
      // this.additionalForm.keys().forEach(key => {
      //   this.additionalForm[key] = this.user[key]
      // })
      this.isPasswordUpdating = false;
    },

    cancelProfileUpdate(){
      this.isProfileUpdating = false;
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
    },

    clickFileInput(){
      this.isProfileUpdating = true
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },

    previewFile(event){
      this.additionalForm.profile_photo = event.target.files[0];
      this.profile_photo = URL.createObjectURL( this.additionalForm.profile_photo);
      // var reader = new FileReader();
      // reader.addEventListener('load', readFile);
      // reader.readAsText(file);
      // console.log(this.additionalForm.profile_photo)
      // reader.readAsText(this.additionalForm.profile_photo);
    },

    readFile(event) {
      console.log(event.target.result);
    }
  }
}
</script>
<style>
.reader-img{
  border-radius: 50%;
  display:block;
  width:250px;
}
.hired-tag{
  font-size: 12px;
  font-weight: bolder;
}
</style>