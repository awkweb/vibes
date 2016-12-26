<template>
    <div id="sign-up" class="djoser">
        <div class="auth">
            <h1 class="auth__title">Sign Up</h1>
            <form class="auth__form">
                <div class="auth__input-container">
                    <div class="auth__label-container">
                        <label class="auth__label">Email address</label>
                    </div>
                    <input v-model="email" class="auth__input" type="text" placeholder="you@domain.com" spellcheck="false" autofocus>
                </div>
                <div class="auth__input-container">
                    <div class="auth__label-container">
                        <label class="auth__label">Password</label>
                    </div>
                    <input v-model="password" class="auth__input" type="password" placeholder="Super, secret">
                </div>
                <div class="auth__input-container">
                    <div class="auth__label-container">
                        <label class="auth__label">Confirm password</label>
                    </div>
                    <input v-model="confirmPassword" class="auth__input" type="password" placeholder="You know the drill">
                </div>
                <button v-on:click.prevent="signUp" class="auth__button--primary">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
import router from '../router'
import store from '../store'
import axios from 'axios'

export default {
    name: 'sign-up',

    data: function () {
        return {
            email: null,
            password: null,
            confirmPassword: null
        }
    },

    methods: {
        signUp: function () {
            const data = {
                email: this.email,
                password: this.password
            }
            store.dispatch('POST_TOKEN', data).then(() => {
                var instance = axios.create({
                    baseURL: '/api/v1/',
                    headers: {'Authorization': `JWT ${store.state.token}`}
                })
                instance.get('users/')
                .then(function (response) {
                    console.log(response.data)
                })
                .catch(function (error) {
                    console.log(error)
                })
            })
        }
    },

      created () {
        if (this.$route.query.email) {
          this.email = this.$route.query.email
        }
      }
}
</script>
