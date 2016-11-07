<template>
  <div class="u-formControl">
    <label v-if="label">{{label}}</label>
    <div :class="{'u-imageField': !block, 'u-imageField--block': block}">
      <div class="u-imageField__panel" v-if="currentImage">
        <img src="../../../assets/images/icon-delete.svg" alt="" class="u-imageField__delete" @click="handleDelete">
      </div>
      <img class="u-imageField__image" v-if="currentImage" :src="currentImage" :alt="title">
      <a class="u-imageField__placeholder" v-if="!currentImage" @click="selectImage">
        <img class="u-imageField_placeholderImage" src="../../../assets/images/placeholder-image.svg" alt="">
        <span class="u-imageField__placeholderText">Add Image</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
      image: String,
      title: String,
      block: Boolean
    },

    data () {
      return {
        currentImage: this.image,
        showPanel: false
      }
    },

    watch: {
      image (value) {
        this.currentImage = value
      },
      currentImage (value) {
        this.$emit('change', value)
      }
    },

    methods: {
      selectImage () {
        console.log('select image')
        this.currentImage = 'http://vuejs.org/images/logo.png'
      },
      handleDelete () {
        console.log('you are trying to delete image')
        this.currentImage = ''
      }
    }
  }
</script>
