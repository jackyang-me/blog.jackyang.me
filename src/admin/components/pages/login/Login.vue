<template>
  <div class="c-login">
    <div class="c-login__background"></div>
    <div class="c-login__form">
      <p class="c-login__error red-text" v-show="loginResult.error">Invalid username or password</p>
      <input class="c-login__input" type="text" placeholder="username" @input="handleChangeUserName">
      <input class="c-login__input" type="password" placeholder="password" @input="handleChangePassword">
      <button class="u-btn--block c-login__button" @click="handleClickLogin">login</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState({
        loginResult: state => state.login.loginResult
      })
    },

    watch: {
      loginResult (value) {
        if (!value.error) {
          this.$router.push({name: 'postList'})
        }
      }
    },

    methods: {
      ...mapActions([
        'changeUserName',
        'changePassword',
        'login'
      ]),
      handleChangeUserName (e) {
        this.changeUserName(e.target.value)
      },
      handleChangePassword (e) {
        this.changePassword(e.target.value)
      },
      handleClickLogin () {
        this.login()
      }
    }
  }
</script>
