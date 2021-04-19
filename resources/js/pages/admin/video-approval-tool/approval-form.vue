<template>
  <card class="py-3 m-4">
    <div class="row">
      <div class="col-md-8">
        <h4 class="mb-3">Upload Details</h4>
        <p class="mb-5">Pedning upload details.</p>
      </div>
      <div class="col-md-4 text-right">
        <router-link :to="{ name: 'admin.upload-approvals' }" class="nav-link" active-class="active">
          <v-button class="btn btn-danger btn-lg">Back</v-button>
        </router-link>
      </div>
    </div>
    <hr>
		<div>
      <!-- User name -->
      <div class="form-group col-md-7 mx-auto">
        <label>User Name</label>
        <input  v-model="uploadData.user.name" class="form-control" type="text" :readonly="true">
      </div>

      <!-- User email -->
      <div class="form-group col-md-7 mx-auto">
        <label>User Email</label>
        <input  v-model="uploadData.user.email" class="form-control" type="text" :readonly="true">
      </div>

			<!-- Upload Name -->
      <div class="form-group col-md-7 mx-auto">
        <label>Upload Name</label>
        <input  v-model="uploadData.upload.name" class="form-control" type="text" :readonly="true">
      </div>

      <!-- Upload Content -->
      <div class="form-group col-md-7 mx-auto">
        <label>Upload Content</label>
				<textarea class="form-control" v-model="uploadData.upload.content" cols="30" rows="3" :readonly="true">
				</textarea>
      </div>

			<!-- Upload Created -->
      <div class="form-group col-md-7 mx-auto">
        <label>Upload Created</label>
        <input  v-model="uploadData.created_at" class="form-control" type="text" :readonly="true">
      </div>

			<!-- Status -->
      <div class="form-group col-md-7 mx-auto">
        <label>Status</label><br>
        <label :class="uploadData.is_approved ? 'text-success' : 'text-danger'">{{ uploadData.is_approved ? 'Approved' : 'Pending' }}</label>
      </div>

      <!-- Approve Button -->
       <div class="form-group row col-md-7 mx-auto mt-3">
        <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
          <!-- Update Button -->
          <button class="btn w-100" :class="uploadData.is_approved ? 'btn-danger' : 'btn-primary'" @click="update">
            {{ uploadData.is_approved ? 'Disapprove' : 'Approve' }}
          </button>
        </div>
      </div>
		</div>
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
  }),

  computed: mapGetters({
    user: 'auth/user',
    uploadData: 'admin-upload-approval/uploadData',
  }),

  async beforeMount () {
    let id = this.$route.params.id
    await this.$store.dispatch("admin-upload-approval/viewUploadApproval", id);
  },

	mounted(){
	},

  methods: {
    async update () {
			let id = this.$route.params.id
			console.log(id)
      Swal.fire({
        title: 'Are you sure?',
        text: "You wan't to approve this!",
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Yes'
      })
      .then((result) => {
				if (result) {
					this.$store.dispatch('admin-upload-approval/updateUploadApproval', id).then(({success, message}) => {
						if (success) {
							swalSuccess(message).then(() =>{
								this.$router.push({ name: 'admin.upload-approvals' })
							})
						}
					})
				}
        
      })
    },
  }
}
</script>
