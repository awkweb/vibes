<template>
  <div id="log-in">
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
import router from '../router'
import store from '../store'
import axios from 'axios'

export default {
  name: 'log-in',

  data: function () {
    return {
      email: null,
      password: null
    }
  },

  methods: {
    logIn: function () {
        const data = {
            email: this.email,
            password: this.password
        }
        store.dispatch('POST_TOKEN', data).then(() => {
            console.log('TOKEN: ' + store.state.token)
            var instance = axios.create({
              baseURL: '/api/v1/',
              headers: {'Authorization': 'JWT ' + store.state.token}
            })
            instance.get('users/1')
              .then(function (response) {
                console.log(response.data)
              })
              .catch(function (error) {
                console.log(error)
              })
        })
    }
  }
}
</script>
