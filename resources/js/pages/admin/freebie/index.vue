<template>
  <b-container class="pt-5">
    <b-row>
      <b-card class="w-100">
        <template #header>
          <h4 class="m-0">Freebie Manager</h4>
        </template>
        <b-card-body>
          <b-row class="py-3">
            <b-col>
              <b-button variant="secondary" @click="showCreateModal()"> CREATE </b-button>
            </b-col>
          </b-row>
          <b-table hover :items="items" :fields="fields" responsive>

            <template #cell(id)="data">
              <b-dropdown variant="link" no-caret>
                <template #button-content>
                  <b-icon-three-dots style="color:black !important;"/>
                </template>

                <b-dropdown-item @click="showUpdateModal(data.value)"><b-icon-pencil-square/> Update</b-dropdown-item>
                <b-dropdown-item @click="showDeleteModal(data.value)"><b-icon-trash2/> Delete</b-dropdown-item>
              </b-dropdown>
            </template>

            <template #cell(photo)="data">
                <b-img :src="`/images/freebies/${data.value}`" width="300" height="auto" fluid> </b-img>
            </template>

            <template #cell(is_active)="data">
                <b-form-checkbox v-model="data.value" @input="handleActiveStatus(data)" switch/>
            </template>
          </b-table>
        </b-card-body>
      </b-card>
    </b-row>

    <!--- CREATE MODAL -->

    <b-modal id="create-modal">
      <template #modal-title>
        <span class="h3 text-center"> Add New Freebie</span>
      </template>
      <div class="d-block text-center">
        <b-row class="my-1">
          <b-col>
            <b-img :src="`/images/profile.jpg`" height="auto" width="150px" fluid> </b-img>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="6" class="py-3 mx-auto">
            <b-form-file v-model="createSubmit.file" accept="image/*" plain></b-form-file>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-small" class="small">Name:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-small" size="sm" v-model="createSubmit.name"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label for="textarea-small" class="small">Description:</label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea id="textarea-small" size="sm" v-model="createSubmit.description"></b-form-textarea>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-small" class="small">Points:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-small" size="sm" v-model="createSubmit.points"></b-form-input>
          </b-col>
        </b-row>
      </div>
        <template #modal-footer>
          <span class="w-100">
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="()=>{
                handleCreateSubmit();
                $bvModal.hide('create-modal');
                }"
            >
              Save
            </b-button>
          </span>
        </template>
    </b-modal>

    <!-- UPDATE MODAL -->
    <b-modal id="update-modal">
      <template #modal-title>
        <span class="h3 text-center"> Update Freebie</span>
      </template>
      <div class="d-block text-center">
        <b-row class="my-1">
          <b-col>
            <b-img :src="`/images/freebies/${updateModalData.photo}`" height="auto" width="150px" fluid> </b-img>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="6" class="py-3 mx-auto">
            <b-form-file v-model="filePhoto" accept="image/*" plain @input="handleImageOnUpdate(updateModalData.id)"></b-form-file>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-small" class="small">Name:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-small" size="sm" v-model="updateModalData.freebie_name"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label for="textarea-small" class="small">Description:</label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea id="textarea-small" size="sm" v-model="updateModalData.description"></b-form-textarea>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-small" class="small">Points:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-small" size="sm" v-model="updateModalData.points"></b-form-input>
          </b-col>
        </b-row>
      </div>
        <template #modal-footer>
          <span class="w-100">
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="()=>{
                handleUpdateSubmit(updateModalData.id);
                $bvModal.hide('update-modal');
                }"
            >
              Save
            </b-button>
          </span>
        </template>
    </b-modal>

    <!-- DELETE MODAL -->
    <b-modal id="delete-modal" hide-footer>
      <template #modal-title>
        <span class="h3 text-center"> Delete {{updateModalData.freebie_name}} </span>
      </template>
      <div class="d-block text-center">
        <b-row class="p-3">
          <b-col>
            <span>  You are about to delete <strong>{{updateModalData.freebie_name}}.</strong> Are you sure? </span>
          </b-col>
        </b-row>
        <b-row class="p-2">
          <b-col class="d-flex justify-content-center">
            <b-button
              variant="link"
              size="sm"
            >
              Cancel
            </b-button>

            <b-button
              variant="danger"
              size="sm"
              class="float-right"
              @click="()=>{
                handleDeleteSelected(updateModalData.id);
                $bvModal.hide('update-modal');
                }"
            >
                Delete
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </b-container>
</template>

<script>
import axios from "axios";
import { swalOops, swalSuccess } from "../../../helpers"

export default {
  data: () => ({
    items: [],
    fields:[
      {key: 'photo', label: 'Item', class:' px-3 td-max-width'},
      {key: 'freebie_name', label: 'Name'},
      {key: 'is_active', label: 'Active'},
      {key: 'points', label: 'Points'},
      {key: 'id', label: 'Action'},
    ],
    updateModalData: [],
    filePhoto:[],
    createSubmit:{
      file: [],
      name: '',
      description: '',
      points: '',
    }
  }),

  methods: {
    getFreebie () {
      axios.get('/api/freebie/').then((response) => this.items = response.data.data);
    },

    handleImageOnUpdate(event){
      const formData = new FormData();
      formData.append("id", event);
      formData.append("photo", this.filePhoto);
      axios.post('/api/freebie/update?_method=PATCH', formData).then((res)=>{
        this.handleUpdateModal(event);
        this.getFreebie();
        swalSuccess("IMAGE SAVED!");
      }).catch((err)=>{
        swalOops("Something went wrong...")
      })
    },

    handleActiveStatus(event){
      const formData = new FormData();
      formData.append("id", event.item.id);
      formData.append("is_active", event.value);

      axios.post('/api/freebie/update?_method=PATCH', formData).then((res)=>{
        this.getFreebie();
      }).catch((err)=>{
        swalOops("Something went wrong...")
      })
    },

    handleUpdateSubmit(event){
      const data      = this.updateModalData;
      const formData  = new FormData();
      formData.append("freebie_name", data.freebie_name);
      formData.append("description", data.description);
      formData.append("points", data.points);
      formData.append("id", event);

      axios.post('/api/freebie/update?_method=PATCH', formData).then((res)=>{
        this.getFreebie();
        swalSuccess("UPDATED!!");
      }).catch((err)=>{
        swalOops("Something went wrong...")
      })
    },

    handleCreateSubmit(){
      const formData = new FormData();
      formData.append("freebie_name", this.createSubmit.name);
      formData.append("description", this.createSubmit.description);
      formData.append("points", this.createSubmit.points);
      formData.append("photo", this.createSubmit.file);

      axios.post(`/api/freebie/create`, formData).then((response)=>{
        this.getFreebie();
        swalSuccess("Created!")
        this.$bvModal.show('create-modal');
      }).catch((err)=>{
        swalOops("Something went wrong...");
      })
    },

    handleDeleteSelected(input){
      axios.delete(`/api/freebie/delete/${input}`).then((response)=>{
        swalSuccess("Deleted!");
        this.getFreebie();
        this.$bvModal.hide('delete-modal');
      }).catch((err)=>{
        swalOops("Something went wrong");
      })
    },

    async showUpdateModal(event){
      await axios.get(`/api/freebie/${event}`).then((res)=>{
        this.updateModalData = res.data.data;
        this.$bvModal.show('update-modal');
      }).catch((err)=> console.warn("ERR", err));
    },

    async showDeleteModal(event){
      await axios.get(`/api/freebie/${event}`).then((res)=>{
        this.updateModalData = res.data.data;
        this.$bvModal.show('delete-modal');
      }).catch((err)=> console.warn("ERR", err));
    },

    async showCreateModal(event){
        this.$bvModal.show('create-modal');
    }



  },

  beforeMount(){
    this.getFreebie();
  }
}
</script>

<style>
  .td-max-width {
    max-width: 100px !important;
  }
</style>
