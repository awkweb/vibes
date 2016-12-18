<template>
  <nav id="navbar">
    <div class="pull-left">
      <router-link :to="{ name: 'home' }" class="logo">Logo</router-link>
      <a href="#">About</a>
    </div>

    <div class="pull-right">
      <router-link :to="{ name: 'login' }">Log in</router-link>
      <a href="#" class="button-link">Sign up</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app'
}
</script>
