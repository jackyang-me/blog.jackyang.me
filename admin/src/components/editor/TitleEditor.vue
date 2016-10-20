<template>
  <div class="titleEditor">
    <input class="titleEditor__input" type="text" placeholder="title" :value="title" @input="handleInput">
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      onInput: {
        type: Function,
        default: null
      }
    },

    methods: {
      handleInput (e) {
        if (this.onInput) {
          this.onInput(e.target.value);
        }
      }
    }
  };
</script>
