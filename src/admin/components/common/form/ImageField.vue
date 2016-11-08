<template>
  <div class="u-formControl">
    <label v-if="label">{{label}}</label>
    <div :class="{'u-imageField': !block, 'u-imageField--block': block}">
      <div class="u-imageField__panel" v-if="currentImage">
        <img src="../../../assets/images/icon-delete.svg" alt="" class="u-imageField__delete" @click="handleDelete">
      </div>
      <img class="u-imageField__image" v-if="currentImage" :src="currentImage" :alt="title">
      <a class="u-imageField__placeholder" v-show="!currentImage" ref="pickFiles">
        <img class="u-imageField_placeholderImage" src="../../../assets/images/placeholder-image.svg" alt="">
        <span class="u-imageField__placeholderText">Add Image</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    uploader: null,

    props: {
      label: String,
      image: String,
      title: String,
      block: Boolean
    },

    data () {
      return {
        currentImage: this.image,
        showPanel: false,
        uploadStarted: false,
        uploadPercentage: '',
        uploadSpeed: '',
        uploadCompleted: false,
        uploadError: null
      }
    },

    watch: {
      image (value) {
        this.currentImage = value
      },
      currentImage (value) {
        this.$emit('change', value)
      },
      uploadPercentage (value) {
        this.$emit('uploadprogress', {percent: value, speed: this.uploadSpeed})
      },
      uploadStarted (value) {
        if (value) {
          this.$emit('uploadstart')
        }
      },
      uploadCompleted (value) {
        if (value) {
          this.$emit('uploadcomplete', this.currentImage)
        }
      },
      uploadError (value) {
        if (value) {
          this.$emit('uploaderror', value)
        }
      }
    },

    mounted () {
      this.initUploader()
    },

    destroyed () {
      this.$options.uploader = null
    },

    methods: {
      selectImage () {
        console.log('select image')
        this.currentImage = 'http://vuejs.org/images/logo.png'
      },
      handleDelete () {
        console.log('you are trying to delete image')
        this.currentImage = ''
      },
      initUploader () {
        var that = this

        this.$options.uploader = Qiniu.uploader({
          runtimes: 'html5, flash, html4',
          browse_button: this.$refs.pickFiles,
          uptoken_url: '/upload/token',
          get_new_uptoken: false,
          multi_selection: false,
          domain: 'http://ofkyhrvda.bkt.clouddn.com/',
          max_file_size: '20mb',
          max_retries: 3,
          dragDrop: false,
          chunk_size: '4mb',
          auto_start: true,
          init: {
            BeforeUpload: function () {
              that.uploadStarted = true
              that.uploadCompleted = false
            },
            UploadProgress: function (up, file) {
              that.uploadPercentage = file.percent
              that.uploadSpeed = file.speed
            },
            FileUploaded: function (up, file, info) {
              let domain = up.getOption('domain')
              let res = JSON.parse(info)
              that.currentImage = domain + res.key
            },
            Error: function (up, err, errTip) {
              that.uploadError = err
            },
            UploadComplete: function() {
              that.uploadStarted = false
              that.uploadCompleted = true
            },
            Key: function (up, file) {
              let type = file.type.split('/')[0]
              let ext = file.type.split('/')[1]
              let key = `post/${type}/${file.id}.${ext}`;
              return key
            }
          }
        })
      }
    }
  }
</script>
