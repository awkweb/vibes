<template>
  <div id="home">
    <navbar></navbar>
    <div class="cta">
      <h1 class="headline">Meet interesting people, every week.</h1>
      <h2 class="sub-headline">Get connected with people you need to know in your city.</h2>
    </div>
    <div class="form">
      <div class="action">
        <input class="email" type="text" placeholder="tom@harvard.edu" autofocus="true">
        <button class="button">Let's do this 🚀</button>
      </div>
      <span class="nudge">Join the community of 250+ in Boston, MA</span>
    </div>
    <div class="explain">
      <h2>How does it work?</h2>
      <div class="reasons">
        <div class="item">
          <span class="number">1</span>
          <div>
          <span class="main">Every Sunday receive a curated connection</span>
          Get an email introducing you to someone new.
          </div>
        </div>
        <div class="item">
          <span class="number">2</span>
            <div>
              <span class="main">Coordinate coffee, drinks, a night out—whatever</span>
              Talk and set up a time to meet during the week.
            </div>
        </div>
        <div class="item">
          <span class="number">3</span>
            <div>
            <span class="main">Repeat (seriously that's it)</span>
            Meeting new people is good for you, and the world.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'home',

  components: {
    'navbar': Navbar,
  },
}
</script>
