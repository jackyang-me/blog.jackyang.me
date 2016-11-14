<template>
  <modal v-if="show">
    <div>
      <image-field label="upload" block
                  :image="imageUrl"
                  @change="handleUploadImageChange"></image-field>
      <text-field label="url" :value="imageUrl" @input="handleInputImageUrl" block></text-field>
      <text-field label="title" :value="imageTitle" @input="handleInputImageTitle" block></text-field>
      <div class="c-imageSelectorModal__actions">
        <button class="u-flatBtn" @click="handleClickCancel">Cancel</button>
        <button class="u-btn" @click="handleClickOK">OK</button>
      </div>
    </div>
  </modal>
</template>

<script>
  import { mapActions } from 'vuex'
  import Modal from 'components/common/modal/Modal.vue'
  import ImageField from 'components/common/form/ImageField.vue'
  import TextField from 'components/common/form/TextField.vue'

  export default {
    components: {
      'modal': Modal,
      'image-field': ImageField,
      'text-field': TextField
    },

    props: {
      show: Boolean
    },

    data () {
      return {
        imageUrl: '',
        imageTitle: ''
      }
    },

    watch: {
      show (value) {
        if (value) {
          this.imageUrl = ''
          this.imageTitle = ''
        }
      }
    },

    methods: {
      ...mapActions([
        'closeImageSelectorModal'
      ]),
      handleUploadImageChange (url) {
        this.imageUrl = url
      },
      handleInputImageUrl (value) {
        this.imageUrl = value
      },
      handleInputImageTitle (value) {
        this.imageTitle = value
      },
      handleClickCancel () {
        this.$emit('cancel')
        this.closeImageSelectorModal()
      },
      handleClickOK () {
        this.$emit('ok', {
          url: this.imageUrl,
          title: this.imageTitle
        })
        this.closeImageSelectorModal()
      }
    }

  }
</script>
