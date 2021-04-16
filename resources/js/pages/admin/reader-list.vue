<template>
  <card class="py-3">
    <h4 class="mb-0">Readers List</h4>
    <p class="mb-0">List of readers.</p>
    <hr>
   <table class="table">
    <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(reader, i) in readers" :key="reader.id">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ reader.username }}</td>
            <td>{{ reader.name }}</td>
            <td>{{ reader.email }}</td>
            <td><div class="cursor-pointer link" @click="view(reader.id)">Edit</div></td>
        </tr>
        <tr>
          <td colspan="5" class="text-center" v-if="readers.length <= 0">No Reader found</td>
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
  }
}
</script>
