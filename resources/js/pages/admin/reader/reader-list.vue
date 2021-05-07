<template>
  <card class="py-3 m-4">
    <h4 class="mb-3">Readers List</h4>
    <p class="mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
   <table class="table">
    <thead>
        <tr>
          <th scope="col">ID</th>
          <td></td>
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Visible?</th>
          <th scope="col">Banned?</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="reader in readers" :key="reader.id">
            <th scope="row">{{reader.id}}</th>
            <td>
              <img class="reader-img" :src="reader.photo_url">
            </td>
            <td>{{ reader.username }}</td>
            <td>{{ reader.name }}</td>
            <td>{{ reader.email }}</td>
            <td>{{ reader.visible ? 'Yes' : 'No' }}</td>
            <td>{{ reader.is_banned == 0 ? 'No' : 'Yes' }}</td>
            <td v-if='reader.is_approved == "PENDING"' class="text-warning">Pending</td>
            <td v-else :class="reader.is_approved == 'APPROVED' ? 'text-success' : 'text-danger'">{{ reader.is_approved == 'APPROVED' ? 'Approved' : 'Rejected' }}</td>
            <td><div class="cursor-pointer link" @click="view(reader.id)">Manage</div></td>
        </tr>
        <tr>
          <td colspan="7" class="text-center" v-if="readers ? readers.length <= 0 : false">No Reader found</td>
        </tr>
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

  data: () => ({
  }),

  computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers',
  }),

  created () {
  },

  methods: {
      view(id){
        this.$router.push({
            name: "admin.reader-form",
            params: {
                id: id
            }
        });
      }
  },

  beforeMount(){
      this.$store.dispatch("admin-reader/fetchReaders");
      this.$store.dispatch('auth/fetchUser');

      if (!this.user){
        this.$router.push({ name: 'home' })
      }
  }
}
</script>
<style>
.reader-img{
  border-radius: 50%;
}
.hired-tag{
  font-size: 12px;
  font-weight: bolder;
}
</style>
