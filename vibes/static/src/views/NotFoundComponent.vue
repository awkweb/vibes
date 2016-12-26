<template>
  <div id="not-found-component">
    <h1>Nothing to see here</h1>
    <router-link :to="{ name: 'home' }">Back to home</router-link>
  </div>
</template>

<script>
export default {
  name: 'not-found-component'
}
</script>
