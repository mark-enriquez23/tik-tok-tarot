<template>
  <card class="py-3 m-4">
    <h4 class="mb-3">
      Pending Uploads Approval
    </h4>
    <p class="mb-5">
      Necessitatibus eius consequatur ex aliquid fuga eum quidem.
    </p>
    <b-row>
      <b-col sm="3" class="d-flex justify-content-center align-items-center mb-3">
        <span> Filter: </span>
        <b-form-select v-model="selectedFilter" :options="selectOptions" size="sm" class="ml-3" @change="handleFilterVlogs" />
      </b-col>
      <b-col sm="12">
        <div v-if="loading" class="text-center">
          <b-spinner label="Loading..." />
        </div>

        <table v-else class="table">
          <thead>
            <tr>
              <th scope="col">
                ID
              </th>
              <th scope="col">
                User Name
              </th>
              <th scope="col">
                User Email
              </th>
              <th scope="col">
                Title
              </th>
              <th scope="col">
                Status
              </th>
              <th scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in data.data" :key="u.id">
              <th scope="row">
                {{ u.id }}
              </th>
              <td>{{ u.user.username }}</td>
              <td>{{ u.user.email }}</td>
              <td>{{ u.title }}</td>
              <td v-if="u.is_approved == &quot;PENDING&quot;" class="text-warning">
                Pending
              </td>
              <td v-else :class="u.is_approved == 'APPROVED' ? 'text-success' : 'text-danger'">
                {{ u.is_approved == 'APPROVED' ? 'Approved' : 'Rejected' }}
              </td>
              <td>
                <b-dropdown variant="link" no-caret>
                  <template #button-content>
                    <b-icon-three-dots style="color:black !important;" />
                  </template>

                  <b-dropdown-item :disabled="u.is_approved === 'APPROVED'" @click="showDecisionModal('APPROVE', u.id)">
                    <b-icon-check /> Approve
                  </b-dropdown-item>
                  <b-dropdown-item :disabled="u.is_approved === 'REJECTED'" @click="showDecisionModal('REJECT', u.id)">
                    <b-icon-x /> Reject
                  </b-dropdown-item>
                </b-dropdown>
              </td>
            </tr>
            <tr>
              <td v-if="data ? data.data <= 0 : false" colspan="7" class="text-center">
                No Pending Uploads
              </td>
            </tr>
          </tbody>
        </table>
        <b-pagination
          v-if="data.total > data.per_page"
          v-model="data.current_page"
          :total-rows="data.total"
          :per-page="data.per_page"
          align="center"
          size="sm"
          aria-controls="my-table"
          @change="changeData"
        />
      </b-col>
    </b-row>
    <b-modal id="decision-modal" hide-footer>
      <template #modal-title>
        <span class="h3 text-center"> {{ decision }} </span>
      </template>
      <div class="d-block text-center">
        <b-row class="p-3">
          <b-col>
            <span><strong> Are you sure to {{ decision }} the video? </strong></span>
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
              {{ decision }}
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import { swalSuccess } from '../../../helpers'
import axios from 'axios'
export default {
  scrollToTop: false,

  data: () => ({
    decision: '',
    selectedId: '',
    data: [],
    selectedFilter: 'ALL',
    selectOptions: [
      { value: 'ALL', text: 'ALL' },
      { value: 'APPROVED', text: 'APPROVED' },
      { value: 'REJECTED', text: 'REJECTED' },
      { value: 'PENDING', text: 'PENDING' }
    ],
    loading: true
  }),

  computed: mapGetters({
    user: 'auth/user'
    // uploads: 'admin-upload-approval/uploads',
  }),

  beforeMount () {
    this.handleFetchAllVlogs(1)
    // this.$store.dispatch("admin-upload-approval/fetchApprovalUploads");
  },

  methods: {
    view (id) {
      this.$router.push({
        name: 'admin.upload-approval',
        params: {
          id: id
        }
      })
    },

    showDecisionModal (decision, id) {
      this.decision = decision
      this.selectedId = id

      this.$bvModal.show('decision-modal')
    },

    handleClose () {
      this.$bvModal.hide('decision-modal')
    },

    handleDecision () {
      let data
      if (this.decision === 'APPROVE') {
        data = {
          'id': this.selectedId,
          'is_approved': 'APPROVED'
        }
      } else {
        data = {
          'id': this.selectedId,
          'is_approved': 'REJECTED'
        }
      }

      axios.patch(`/api/vlog/update`, data).then(() => {
        this.handleFetchAllVlogs(1)
        this.$bvModal.hide('decision-modal')
        swalSuccess('Updated!')
      })
    },

    async handleFetchAllVlogs (page) {
      this.loading = true
      await axios.get(`/api/vlog/?page=${page}`).then((response) => {
        this.data = response.data[0]
        this.loading = false
      })
    },

    async handleFilterVlogs (filter) {

      if (filter === 'ALL') {
        await this.handleFetchAllVlogs(1)
      } else {
        await axios.get(`/api/vlog/status/${filter}`).then(response => {
          this.data = response.data[0]
        })
      }
    },

    async changeData (page) {
      if (this.selectedFilter === 'ALL') {
        await this.handleFetchAllVlogs(1)
      } else {
        await axios.get(`/api/vlog/status/${page}`).then(response => {
          this.data = response.data[0]
        })
      }
    }
  }
}
</script>
