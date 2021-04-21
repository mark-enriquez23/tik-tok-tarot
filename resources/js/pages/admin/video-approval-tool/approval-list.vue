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
          <th scope="col">Upload Name</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <!-- <tr v-for="u in uploads" :key="u.id">
            <th scope="row">{{u.id}}</th>
            <td>{{ u.user.name }}</td>  
            <td>{{ u.user.email }}</td>
            <td>{{ u.upload.name }}</td>
            <td :class="u.is_approved ? 'text-success' : 'text-danger'">{{ u.is_approved ? 'Approved' : 'Pending' }}</td>
            <td><div class="cursor-pointer link" @click="view(u.id)">Manage</div></td>
        </tr> -->
        <tr >
            <th scope="row">2</th>
            <td>Reader</td>  
            <td>Reader@temp-mail.com</td>
            <td>Sample Video</td>
            <td>Approved</td>
            <td><div class="cursor-pointer link" @click="view(u.id)">Manage</div></td>
        </tr>
        <tr >
            <th scope="row">3</th>
            <td>Reader3</td>  
            <td>Reader3@temp-mail.com</td>
            <td>Sample Video 2</td>
            <td>Approved</td>
            <td><div class="cursor-pointer link" @click="view(u.id)">Manage</div></td>
        </tr>
        <!-- <tr>
          <td colspan="7" class="text-center" v-if="uploads ? uploads.length <= 0 : false">No Pending Uploads</td>
        </tr> -->
    </tbody>
    </table>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {
  },

  data: () => ({}),

  computed: mapGetters({
    user: 'auth/user',
    uploads: 'admin-upload-approval/uploads',
  }),

  created () {
  },

  methods: {
      view(id){
        this.$router.push({
            name: "admin.upload-approval",
            params: {
                id: id
            }
        });
      }
  },

  beforeMount(){
      this.$store.dispatch("admin-upload-approval/fetchApprovalUploads");
  }
}
</script>
