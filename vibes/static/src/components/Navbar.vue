<template>
  <nav id="navbar" class="navbar">
    <div class="navbar__pull-left">
      <router-link :to="{ name: 'home' }" class="logo">logo</router-link>
      <a href="#">About</a>
    </div>

    <div class="navbar__pull-right">
      <router-link :to="{ name: 'login' }">Log In</router-link>
      <router-link :to="{ name: 'signup' }" class="navbar__button">Sign Up</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app'
}
</script>
