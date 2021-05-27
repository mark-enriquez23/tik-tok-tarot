<template>
  <b-container class="pt-5">
    <!-- header -->
    <b-row class="pb-3">
      <b-col>
        <h4> Credit </h4>
      </b-col>
    </b-row>
    <!--top -->
    <b-row class="pb-3">
      <b-col cols="7">
        <b-card>
          <b-card-text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Nisl vel pretium lectus quam id leo. Et magnis dis parturient montes nascetur ridiculus mus. Dui id ornare arcu odio ut sem. Sodales ut eu sem integer. Bibendum arcu vitae elementum curabitur vitae. Vehicula ipsum a arcu cursus vitae congue mauris. Vel facilisis volutpat est velit egestas dui id ornare. Sapien pellentesque habitant morbi tristique senectus et.
            </p>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="5">
        <b-card>
          <b-card-group deck>
            <card-number :title="'Earned Points'" :body="currentCredit.earned_points"/>
            <card-number :title="'Total Points'" :body="currentCredit.goal_points"/>
          </b-card-group>
        </b-card>
      </b-col>
    </b-row>

    <!-- redeem name -->
    <b-row class="pb-3">
      <b-col>
        <h4> Redeem: </h4>
      </b-col>
    </b-row>

    <!-- redeem -->
    <b-row class="pb-3">
      <b-col>
        <b-card>

          <b-row>
            <b-col cols="3" v-for="freebie in freebies" :key="freebie.id">
            <card-image
              :title="freebie.freebie_name"
              :img="'/images/'+freebie.photo"
              :alt="freebie.freebie_name + 'picture'"
              :description="freebie.description"
              :points="freebie.points"
            />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CardNumber from "../../../components/CardNumber";
import CardImage from "../../../components/CardImage";
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  components:{
    CardNumber,
    CardImage
  },

  data: () => ({
    freebies      : [],
    currentCredit : []
  }),

  computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers',
  }),

  methods:{

  },

  beforeMount(){
    axios.get(`/api/freebie`).then((response)=>{
      this.freebies = response.data.data;
    });

    axios.get(`/api/credit/list-by-id/${this.user.id}`).then((response)=>{
      this.currentCredit = response.data.data;
    });

  }

}
</script>
