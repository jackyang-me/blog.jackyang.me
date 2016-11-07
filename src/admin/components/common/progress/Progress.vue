<template>
  <div class="u-progress">
    <label v-if="label || syncLabel" class="u-progress__label">{{syncLabel ? width : label}}</label>
    <div class="u-progress__background">
      <div class="u-progress__bar" :style="{width: width}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      percentage: [Number, String],
      label: String,
      syncLabel: Boolean
    },

    computed: {
      width () {
        return this.percentage + '%'
      }
    }
  }
</script>
