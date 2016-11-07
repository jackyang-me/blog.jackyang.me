<template>
  <div class="u-modal">
    <div class="u-modal__dialog">
      <h4 v-if="title" class="u-modal__title">{{title}}</h4>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  const baseZIndex = 1200
  let count = 0

  export default {
    props: {
      title: String
    },

    created () {
      count ++
      console.log(count)
    },

    destroyed () {
      count --
      console.log(count)
    },

    watch: {
      open (value) {
        if (value) {
          this.$el.style.zIndex = baseZIndex + count
        }
      }
    }
  }
</script>
