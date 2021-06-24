<template>
  <b-container class="pt-5">
    <b-row>
      <b-col>
        <b-card>
          <template #header>
            <h4 class="m-0 text-center">Suggestions</h4>
          </template>
          <b-card-body v-if="suggestions">
            <b-table
              id="suggestion_tbl"
              :items="suggestions.data"
              :per-page="suggestions.perPage"
              :fields="fields"
              :current-page="suggestions.currentPage"
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
              v-model="suggestions.currentPage"
              :total-rows="suggestions.total"
              :per-page="perPage"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
              align="center"
              aria-controls="suggestion_tbl"
              size="sm"
            ></b-pagination>
          </b-card-body>
          <b-card-body v-if="!suggestions">
            <h1> no suggestions to load </h1>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</b-container>
</template>

<script>

import { mapGetters } from 'vuex';

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
    }
  },

  computed: mapGetters({
    auth: 'auth/user',
    suggestions: 'suggestions/suggestionsData'
  }),

  methods: {
    fetchSuggestions(){
      this.$store.dispatch('suggestions/fetchUserSuggestions', {id: this.auth.id});
    },

    viewVlogs(id){
      this.$router.push(`/vlogs/view/${id}`)
    }
  },

  created() {
    this.fetchSuggestions()

  },
}

</script>
