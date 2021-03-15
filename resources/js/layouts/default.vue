<template>
  <div class="main-layout">
    <navbar />

    <div class="container mt-4">
      <child />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  name: 'MainLayout',

  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
  .line-form-break {
    height: 3px;
    background: #007BFE;
    width: 50px;
  }
</style>
