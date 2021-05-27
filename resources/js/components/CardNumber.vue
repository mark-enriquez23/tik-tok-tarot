<template>
  <b-card>
    <template #header>
      <div class="d-flex align-items-center justify-content-center">
        {{title}}
      </div>
    </template>
    <b-card-body>
      <div class="d-flex align-items-center justify-content-center">
        {{body}}
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'CardNumber',

  props: {
    title   : String,
    body    : Number
  }
}
</script>
