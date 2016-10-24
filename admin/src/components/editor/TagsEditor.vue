<template>
  <div class="tagsEditor">
    <img src="../../assets/images/tag_icon_grey.png" alt="" class="tagsEditor__icon">
    <input class="tagsEditor__input" type="text" placeholder="tag-a, tag-b, ..."
          :value="tagsString" @change="handleInputChange">
  </div>
</template>

<script>
  export default {
    props: {
      tags: {
        type: Array,
        default () {
          return [];
        }
      },
      onChange: {
        type: Function,
        default: null
      }
    },

    computed: {
      tagsString () {
        return (this.tags || []).join(',');
      }
    },

    methods: {
      handleInputChange (e) {
        var tags = e.target.value.split(',').map(tag => tag.trim());
        if (this.onChange) {
          this.onChange(tags);
        }
      }
    }
  };
</script>
