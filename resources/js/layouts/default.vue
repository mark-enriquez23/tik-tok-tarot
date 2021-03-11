<template>
  <div class="main-layout">
    <navbar />

    <div class="container my-5 pb-4">
      <div class="row no-gutters content-main">
        <div class="col-12 col-lg-6 bg-main order-2 order-lg-1 p-5">
          <div class="row h-100">
            <div class="col-lg-12 my-auto text-white">
             <h5>Welcome to Tik-Tok-Tarot</h5>
              <hr class="col-3 ml-lg-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 form-main order-1 order-lg-2 py-5">
          <child />
        </div>
      </div>
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
  .main-layout {
    height: 100vh;
    .container {
      .content-main {
        min-height: 600px;
        height: fit-content;
        border-radius: 8px;
        overflow: hidden;
        -webkit-box-shadow: 0 10px 6px -6px #777;
        -moz-box-shadow: 0 10px 6px -6px #777;
        box-shadow: 0 10px 6px -6px #777;
        .bg-main {
          background: linear-gradient(to bottom, #007BFE, #3389e4);
          hr {
            height: 3px;
            background: #FDFDFD;
          }
        }
        .form-main {
          background: #FDFDFD;
        }
      }
    }
  }
</style>

<style lang="scss">
  .line-form-break {
    height: 3px;
    background: #007BFE;
    width: 50px;
  }
</style>
