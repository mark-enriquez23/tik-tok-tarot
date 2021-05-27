<template>
  <b-card :title="title" :img-src="img" :img-alt="alt" img-top class="text-center">
    <b-card-text>
      <small>
        {{description}}
      </small>
    </b-card-text>
    <b-card-text>
      <b> POINTS: {{points}} </b>
    </b-card-text>
    <b-button size="sm" variant="secondary"> Redeem </b-button>
  </b-card>
</template>

<script>
export default {
  name: 'CardImage',

  props: {
    title       : String,
    img        : String,
    alt         : String,
    description : String,
    points      : Number
  }
}
</script>
