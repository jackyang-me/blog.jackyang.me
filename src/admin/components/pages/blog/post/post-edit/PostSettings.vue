<template>
  <div>
    <image-field label="cover" title="cover"
                :block="true"
                :image="coverImage"
                @change="handleChangeCover"></image-field>
    <text-field label="tags" :value="tagsString" @input="handleInputTags" :block="true"></text-field>
    <select-field label="status" :options="localStatus === 'draft' ? draftOptions : releasedOptions" @change="handleStatusChange" :selected="localStatus" :block="true"></select-field>
    <button class="u-btn--block red c-postEdit__delete" @click="handleDelete" v-if="$route.params.postId">delete</button>
  </div>
</template>

<script>
  import TextField from 'components/common/form/TextField.vue'
  import ImageField from 'components/common/form/ImageField.vue'
  import SelectField from 'components/common/form/SelectField.vue'

  export default {
    components: {
      'text-field': TextField,
      'image-field': ImageField,
      'select-field': SelectField
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
        draftOptions: [{value: 'draft', text: 'draft'}, {value: 'released', text: 'release'}],
        releasedOptions: [{value: 'released', text: 'released'}, {value: 'hide', text: 'hide'}],
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
      handleChangeCover (value) {
        this.localCoverImage = value
      },
      handleStatusChange (value) {
        this.localStatus = value
      },
      handleDelete () {
        this.$emit('deletepost')
      }
    }
  }
</script>
