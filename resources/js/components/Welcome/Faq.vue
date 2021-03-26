<template>
    <section class="" v-if="faq">
    <div class="container">
    <div class="section-title">
      <h2>Frequently Asked Questions</h2>
      <p>{{ faq.subtitle }}</p>
    </div>
    <div class="row">
        <div class="col-lg-4">
            <div class="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
                <a @click="setQuestions(index)" :href="'#tab' + (index + 1)" class="nav-link" :class="{'active': index===0}"  data-toggle="pill" role="tab" :aria-controls="'tab' + (index + 1)"  v-for="(item, index) in faq.categories" :key="index" >
                    <fa :icon="['fas', item.icon ]" class="text-danger" /> {{ item.title }}
                </a>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="tab-content" id="faq-tab-content">
                <div class="tab-pane show active" :id="'tab' + idIndex" role="tabpanel">
                    <div class="accordion" :id="'accordion-tab-' + idIndex">
                        <div class="card" v-for="(faq, i) in faq.categories[currentIndex].items" :key="i">
                            <div class="card-header" :id="'accordion-tab-' + idIndex + '-heading-' + (i + 1) ">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#accordion-tab-' + idIndex  + '-content-' + (i + 1) " aria-expanded="false" :aria-controls="'accordion-tab-' + idIndex  + '-content-' + (i + 1) ">{{ faq.question }}</button>
                                </h5>
                            </div>
                            <div class="collapse" :class="{'show': i==0 }" :id="'accordion-tab-' + idIndex  + '-content-' + (i + 1) " :aria-labelledby="'accordion-tab-' + idIndex  + '-heading-' + (i + 1) " :data-parent="'#accordion-tab-' + idIndex ">
                                <div class="card-body">
                                    <p>{{ faq.answer }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from '../LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName,
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    currentIndex: 0,
    idIndex: 1
  }),

  computed: mapGetters({
    user: 'auth/user',
    faq: 'faq/faq'
  }),
  mounted() {
  },
  beforeCreate() {
    this.$store.dispatch('faq/fetchFaqData')
  },
  methods: {
    setQuestions(index) {
      this.currentIndex = index;
      this.idIndex = this.currentIndex + 1;
    }
  }
}
</script>

<style lang="scss" scoped>

// FAQ
.faq-nav {
    flex-direction: column;
    margin: 0 0 32px;
    border-radius: 2px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);

    .nav-link {
        position: relative;
        display: block;
        margin: 0;
        padding: 13px 16px;
        background-color: #fff;
        border: 0;
        border-bottom: 1px solid #ddd;
        border-radius: 0;
        color: #616161;
        transition: background-color .2s ease;

        &:hover {
            background-color: #f6f6f6;
        }

        &.active {
            background-color: #f6f6f6;
            font-weight: 700;
            color: rgba(0,0,0,.87);
        }

        &:last-of-type {
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
            border-bottom: 0;
        }

        i.mdi {
            margin-right: 5px;
            font-size: 18px;
            position: relative;
        }
    }
}

// TAB CONTENT
.tab-content {
    box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);

    .card {
        border-radius: 0;
    }

    .card-header {
        padding: 15px 16px;
        border-radius: 0;
        background-color: #f6f6f6;

        h5 {
            margin: 0;

            button {
                display: block;
                width: 100%;
                padding: 0;
                border: 0;
                font-weight: 700;
                color: rgba(0,0,0,.87);
                text-align: left;
                white-space: normal;

                &:hover,
                &:focus,
                &:active,
                &:hover:active {
                    text-decoration: none;
                }
            }
        }
    }

    .card-body {
        p {
            color: #616161;

            &:last-of-type {
                margin: 0;
            }
        }
    }
}


// BORDER FIX
.accordion {
    > .card {
        &:not(:first-child) {
            border-top: 0;
        }
    }
}

.collapse.show {
    .card-body {
        border-bottom: 1px solid rgba(0,0,0,.125);
    }
}
</style>
