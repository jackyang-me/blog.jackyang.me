<template>
  <div class="u-formControl">
    <label v-if="label">{{label}}</label>
    <input :class="{'u-textField': !block, 'u-textField--block': block}"
           :type="type"
           :placeholder="placeholder"
           :value="value"
           @input="handleInput">
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      readonly: Boolean,
      disabled: Boolean,
      block: Boolean,
      maxLength: Number,
      minLength: Number
    },

    data () {
      return {
        currentValue: ''
      }
    },

    watch: {
      value (value) {
        this.currentValue = value
      },
      currentValue (value) {
        this.$emit('input', value)
        this.$emit('change', value)
      }
    },

    methods: {
      handleInput (e) {
        this.currentValue = e.target.value
      }
    }
  }
</script>
