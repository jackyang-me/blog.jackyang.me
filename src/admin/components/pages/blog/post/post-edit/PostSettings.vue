<template>
  <div>
    <image-field label="cover" title="cover"
                :block="true"
                :image="coverImage"
                @uploadstart="handleUploadStart"
                @uploadprogress="handleUploadProgress"
                @uploadcomplete="handleUploadComplete"
                @uploaderror="handleUploadError"></image-field>
    <text-field label="tags" :value="tagsString" @input="handleInputTags" :block="true"></text-field>
    <text-field label="status" :value="localStatus" :block="true"></text-field>
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

    props: {
      coverImage: String,
      status: String,
      tags: {
        type: Array,
        default () {
          return []
        }
      }
    },

    data () {
      return {
        localStatus: this.status,
        localCoverImage: this.coverImage,
        localTags: this.tags
      }
    },

    computed: {
      tagsString () {
        return this.localTags.join(', ')
      }
    },

    watch: {
      coverImage (value) {
        this.localCoverImage = value
      },
      localCoverImage (value) {
        this.$emit('changecover', value)
      },
      status (value) {
        this.localStatus = value
      },
      localStatus (value) {
        this.$emit('changestatus', value)
      },
      tags (value) {
        this.localTags = value
      },
      localTags (value) {
        this.$emit('changetags', value)
      }
    },

    methods: {
      handleInputTags (value) {
        this.localTags = value.split(/,[\s]*/)
      },
      handleUploadStart () {
        console.log('start upload, show progress modal')
      },
      handleUploadProgress (value) {
        console.log('uploading image', value.percent + '%', value.speed / 1024 + 'kb/s')
      },
      handleUploadComplete (imageUrl) {
        console.log('uploaded, close modal', imageUrl)
        this.localCoverImage = imageUrl
      },
      handleUploadError (error) {
        alert('upload image error')
        console.error(error)
      }
    }
  }
</script>
