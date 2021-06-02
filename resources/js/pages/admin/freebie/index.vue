<template>
  <b-container class="pt-5">
    <b-row>
      <b-card class="w-100">
        <template #header>
          <h4 class="m-0">Freebie Manager</h4>
        </template>
        <b-card-body>
          <b-table striped hover :items="items" :fields="fields" />
        </b-card-body>
        <template #footer>
          <div class="float-right">
            <b-button size="sm" variant="link"> CANCEL </b-button>
            <b-button size="sm" variant="secondary"> SUBMIT </b-button>
          </div>
        </template>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    items: [],
    fields:[
      {}
    ]

  }),

  methods: {
    getFreebie(){
      axios.get('/api/freebie/').then((response)=> console.log(response.data.data));
    }
  },

  beforeMount(){
    this.getFreebie();
  }
}
</script>
