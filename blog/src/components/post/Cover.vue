<template>
  <div class="postCover">
    <div class="postCover__mask"></div>
    <img class="postCover__image" :src="image">
  </div>
</template>

<script>
  export default {
    props: {
      smallImage: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      }
    }
  };
</script>
