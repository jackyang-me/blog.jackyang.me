<template>
  <div>
    <image-field label="cover" title="cover" :block="true" :image="coverImage"></image-field>
    <text-field label="tags" :value="tags" @input="handleInputTags" :block="true"></text-field>
    <text-field label="status" value="draft"></text-field>
  </div>
</template>

<script>
  import TextField from 'components/common/form/TextField.vue'
  import ImageField from 'components/common/form/ImageField.vue'

  export default {
    components: {
      'text-field': TextField,
      'image-field': ImageField
    },

    data () {
      return {
        tags: 'js, html',
        coverImage: 'http://vuejs.org/images/logo.png'
      }
    },

    methods: {
      handleInputTags (value) {
        this.tags = value
      }
    }
  }
</script>
