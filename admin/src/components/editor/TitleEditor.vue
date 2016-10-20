<template>
  <div class="titleEditor">
    <input class="titleEditor__input" type="text" placeholder="title" :value="title">
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>
