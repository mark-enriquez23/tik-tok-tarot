<template>
  <b-container class="pt-5">
    <b-row>
      <b-col>
        <b-card>
          <template #header>
            <h4 class="m-0 text-center">Suggestions</h4>
          </template>
          <b-card-body v-if="isExist">
            <b-table
              id="suggestion_tbl"
              :items="tableData.data"
              :per-page="tableData.per_page"
              :fields="fields"
              :current-page="tableData.current_page"
              small
            >
              <template #cell(created_at)="data">
                {{ data.value | moment("dddd, MMMM Do YYYY") }}
              </template>

              <template #cell(id)="data">
                <b-button variant="primary" size="sm" @click="viewVlogs(data.value)"> View</b-button>
              </template>

            </b-table>
            <b-pagination
              v-model="tableData.currentPage"
              :total-rows="tableData.total"
              :per-page="tableData.per_page"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
              align="center"
              aria-controls="suggestion_tbl"
              size="sm"
            ></b-pagination>
          </b-card-body>
          <b-card-body v-if="!isExist">
            <h1> no suggestions to load </h1>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</b-container>
</template>

<script>

import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },

  data() {
    return {
      fields: [
          {
            key: 'video.title',
            label: 'Vlog Title',
            sortable: true
          },
          {
            key: 'created_at',
            label: 'Date',
            sortable: true
          },
          {
            key: 'message',
            label: 'Message',
          },
          {
            key: 'id',
            label: 'Action'
          }
        ],
      tableData: [],
      isExist: false,
    }
  },

  computed: mapGetters({
    auth: 'auth/user',
  }),

  methods: {
    fetchSuggestions(){
      axios.get(`/api/suggestions/user/${this.auth.id}`).then(response =>{
        console.log("RESPONSE", response.data.data);
        console.log("CONDITION", response.data.data.data.some(el=> el.video));
        this.isExist = response.data.data.data.some(el=> el.video);

        this.tableData = response.data.data;
      });

    },

    viewVlogs(id){
      this.$router.push(`/vlogs/view/${id}`)
    },
  },

  beforeMount() {
    this.fetchSuggestions()
  },
}

</script>
