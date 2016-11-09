<template>
  <div class="u-formControl">
    <label v-if="label">{{label}}</label>
    <select v-model="localSelected" :class="{'u-selectField': !block, 'u-selectField--block': block}">
      <option v-for="option in options" :value="option.value">{{option.text}}</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
      selected: [String, Number],
      options: {
        type: Array,
        default () {
          return []
        }
      },
      block: Boolean
    },

    data () {
      return {
        localSelected: this.selected
      }
    },

    watch: {
      selected (value) {
        this.localSelected = value
      },
      localSelected (value) {
        this.$emit('change', value)
      }
    }
  }
</script>
