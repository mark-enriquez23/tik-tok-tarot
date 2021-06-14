<template>
  <card class="py-3 m-4">
    <h4 class="mb-3">Pending Uploads Approval</h4>
    <p class="mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
   <table class="table">
    <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">User Name</th>
          <th scope="col">User Email</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="u in uploads" :key="u.id">
            <th scope="row">{{u.id}}</th>
            <td>{{ u.user.username }}</td>
            <td>{{ u.user.email }}</td>
            <td>{{ u.title }}</td>
            <td v-if='u.is_approved == "PENDING"' class="text-warning">Pending</td>
            <td v-else :class="u.is_approved == 'APPROVED' ? 'text-success' : 'text-danger'">{{ u.is_approved == 'APPROVED' ? 'Approved' : 'Rejected' }}</td>
            <!-- <td><div class="cursor-pointer link">Manage</div></td> -->
            <td>
              <b-dropdown variant="link" no-caret>
                <template #button-content>
                  <b-icon-three-dots style="color:black !important;"/>
                </template>

                <b-dropdown-item @click="showDecisionModal('APPROVE', u.id)"><b-icon-check/> Approve</b-dropdown-item>
                <b-dropdown-item @click="showDecisionModal('REJECT', u.id)"><b-icon-x/> Reject</b-dropdown-item>
              </b-dropdown>
            </td>
        </tr>
        <tr>
          <td colspan="7" class="text-center" v-if="uploads ? uploads.length <= 0 : false">No Pending Uploads</td>
        </tr>
    </tbody>
    </table>
    <b-modal id="decision-modal" hide-footer>
      <template #modal-title>
        <span class="h3 text-center"> {{ decision }} </span>
      </template>
      <div class="d-block text-center">
        <b-row class="p-3">
          <b-col>
            <span></strong> Are you sure to {{ decision }} the video? </span>
          </b-col>
        </b-row>
        <b-row class="p-2">
          <b-col class="d-flex justify-content-center">
            <b-button
              variant="link"
              size="sm"
              @click="()=>{
                handleClose();
                }"
            >
              Cancel
            </b-button>

            <b-button
              variant="info"
              size="sm"
              class="float-right"
              @click="()=>{
                handleDecision();
                }"
            >
                {{decision}}
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </card>
</template>

<script>
import { mapGetters }   from 'vuex'
import { swalSuccess }  from '../../../helpers';
import axios            from 'axios';
export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {
  },

  data: () => ({
    decision: '',
    selectedId: '',
  }),

  computed: mapGetters({
    user: 'auth/user',
    uploads: 'admin-upload-approval/uploads',
  }),

  methods: {
      view(id){
        this.$router.push({
            name: "admin.upload-approval",
            params: {
                id: id
            }
        });
      },

      showDecisionModal(decision, id){
        this.decision   = decision;
        this.selectedId = id;

        this.$bvModal.show('decision-modal');
      },

      handleClose(){
        this.$bvModal.hide('decision-modal');
      },

      handleDecision(){
        const formData = new FormData();
        formData.append("id", this.selectedId);
        if(this.decision === "APPROVE"){
          formData.append("is_approved", "APPROVED")
        }else{
          formData.append("is_approved", "REJECTED")
        }

        axios.post(`/api/vlog/update/?_method=PATCH`, formData).then(()=>{
          this.$store.dispatch("admin-upload-approval/fetchApprovalUploads");
          this.$bvModal.hide('decision-modal');
          swalSuccess("Updated!");
        })

      }
  },

  beforeMount(){
      this.$store.dispatch("admin-upload-approval/fetchApprovalUploads");
  }
}
</script>
