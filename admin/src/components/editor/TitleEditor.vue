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
      inputHandler: {
        type: Function,
        default: null
      }
    },

    methods: {
      handleInput (e) {
        this.inputHandler && this.inputHandler(e.target.value);
      }
    }
  };
</script>
