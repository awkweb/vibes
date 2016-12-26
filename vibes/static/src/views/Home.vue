<template>
  <div id="home">
    <navbar></navbar>
    <div class="home__cta">
      <h1 class="home__cta__headline">Meet interesting people, every week.</h1>
      <h2 class="home__cta__sub-headline">Get connected with people you need to know in your city.</h2>
    </div>
    <div class="home__form">
      <form>
        <input v-model="email" class="home__form__email" type="text" placeholder="you@domain.com" spellcheck="false" autofocus>
        <button v-on:click.prevent="getStarted" class="home__form__button">Get started</button>
      </form>
      <span class="home__form__description">Join the community of 250+ in Boston, MA</span>
    </div>
  </div>
</template>

<script>
import router from '../router'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'home',

  data: function () {
    return {
        email: null,
    }
  },

  components: {
    'navbar': Navbar,
  },

  methods: {
    getStarted: function () {
      if (this.email != null) {
        router.push({ name: 'signup', query: { email: this.email }})
      } else {
        router.push({ name: 'signup'})
      }
    }
  }
}
</script>
