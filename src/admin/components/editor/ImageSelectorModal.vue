<template>
  <div>
    <modal>
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
  </div>
</template>

<script>
  import Modal from 'components/common/modal/Modal.vue'
  import ImageField from 'components/common/form/ImageField.vue'
  import TextField from 'components/common/form/TextField.vue'

  export default {
    components: {
      'modal': Modal,
      'image-field': ImageField,
      'text-field': TextField
    },

    data () {
      return {
        imageUrl: '',
        imageTitle: ''
      }
    },

    methods: {
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
        this.imageUrl = ''
        this.imageTitle = ''
        // close popup
      },
      handleClickOK () {
        // return {url: '', title: ''}
      }
    }

  }
</script>
