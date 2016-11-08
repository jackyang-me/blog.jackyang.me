<template>
  <div>
    <image-field label="cover" title="cover"
                :block="true"
                :image="coverImage"
                @uploadstart="handleUploadStart"
                @uploadprogress="handleUploadProgress"
                @uploadcomplete="handleUploadComplete"
                @uploaderror="handleUploadError"></image-field>
    <text-field label="tags" :value="tags" @input="handleInputTags" :block="true"></text-field>
    <text-field label="status" value="draft" :block="true"></text-field>
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
      },
      handleUploadStart () {
        console.log('start upload, show progress modal')
      },
      handleUploadProgress (value) {
        console.log('uploading image', value.percent + '%', value.speed / 1024 + 'kb/s')
      },
      handleUploadComplete (imageUrl) {
        console.log('uploaded, close modal', imageUrl)
      },
      handleUploadError (error) {
        alert('upload image error')
        console.error(error)
      }
    }
  }
</script>
