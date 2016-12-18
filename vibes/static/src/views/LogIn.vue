<template>
  <div id="login">
    <div class="form-container">
      <h1>Welcome, back</h1>
      <form class="login-form">
        <div class="input-container">
          <label>Email address</label>
          <input v-model="email" type="text" placeholder="tom@harvard.edu" autofocus="true">
        </div>
        <div class="input-container">
          <label>Password</label>
          <input v-model="password" type="password" placeholder="Super, secret">
        </div>
        <button v-on:click.prevent="logIn" class="button-red">Log in</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',

  data: function () {
    return {
      email: null,
      password: null
    }
  },

  methods: {
    logIn: function () {
      console.log(this.email, this.password)
      // http://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication
    }
  }
}
</script>
