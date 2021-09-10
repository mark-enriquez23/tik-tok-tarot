<template>
  <card class="py-3 m-4">
    <h4 class="mb-3">
      Readers List
    </h4>
    <p class="mb-5">
      Necessitatibus eius consequatur ex aliquid fuga eum quidem.
    </p>

    <div v-if="readers.loading" class="text-center">
      <b-spinner label="Loading..." />
    </div>

    <b-table v-else :fields="fields" :items="readers.data" responsive>
      <template #cell(created_at)="data">
        {{ data.item.created_at | moment("MMMM D, YYYY") }}
      </template>

      <template #cell(is_banned)="data">
        <b-form-checkbox v-model="data.value ? true : false" switch @input="handleActiveStatus(data)" />
      </template>

      <template #cell(is_verified)="data">
        <b-icon v-if="data.value" icon="check2-circle" scale="1.5" variant="success" />
        <b-icon v-if="!data.value" icon="x-circle" scale="1.5" variant="danger" />
      </template>
    </b-table>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  scrollToTop: false,

  data () {
    return {
      readers: {
        data: [],
        success: false,
        loading: true
      },
      fields: [
        {
          key: 'id',
          label: 'ID'
        },
        {
          key: 'lastName',
          label: 'Surname',
          sortable: true
        },
        {
          key: 'firstName',
          label: 'Given Name',
          sortable: true
        },
        {
          key: 'username',
          label: 'Username',
          sortabel: true
        },
        {
          key: 'email',
          label: 'Email',
          sortable: true
        },
        {
          key: 'is_approved',
          label: 'Approved?',
          sortable: true
        },
        {
          key: 'is_banned',
          label: 'Banned?',
          sortable: true
        },
        {
          key: 'is_verified',
          label: 'Verified?',
          sortable: true,
          class: 'text-center'
        },
        {
          key: 'created_at',
          label: 'Created',
          sortable: true
        }
      ]

    }
  },

  computed: mapGetters({
    user: 'auth/user'
  }),

  async beforeMount () {
    this.readers.loading = true
    await axios.get('/api/reader/fetch-readers').then((response) => {
      this.readers = response.data
      this.readers.loading = false
    })

    if (!this.user) {
      this.$router.push({ name: 'home' })
    }
    this.readers.loading = false
  },

  methods: {
    view (id) {
      this.$router.push({
        name: 'admin.reader-form',
        params: {
          id: id
        }
      })
    },

    async handleActiveStatus (data) {
      console.log(data)
      let form = {
        'is_banned': data.value ? 0 : 1,
        'id': data.item.id
      }

      await axios.patch('/api/user/ban', form)
    }
  }
}
</script>
<style>
.reader-img{
  border-radius: 50%;
  width: 250px;
  height: 250px;
}
.hired-tag{
  font-size: 12px;
  font-weight: bolder;
}
</style>
