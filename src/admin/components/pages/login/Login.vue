<template>
  <div class="">
    <input type="text" @input="handleChangeUserName">
    <input type="text" @input="handleChangePassword">
    <button @click="handleClickLogin">login</button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
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
