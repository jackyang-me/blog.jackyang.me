<template>
  <div class="postEditor">
    <title-editor :title="post.title" :input-handler="titleInputHander"></title-editor>
    <tags-editor :tags="post.tags" :input-handler="tagsInputHandler"></tags-editor>
    <content-editor :content="post.content" :input-handler="contentInputHandler"></content-editor>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import TitleEditor from './TitleEditor.vue';
  import TagsEditor from './TagsEditor.vue';
  import ContentEditor from './ContentEditor.vue';

  export default {
    props: {
      post: {
        type: Object,
        default () {
          return {}
        }
      }
    },

    components: {
      'title-editor': TitleEditor,
      'tags-editor': TagsEditor,
      'content-editor': ContentEditor
    },

    methods: {
      ...mapActions([
        'editPostTitle',
        'editPostTags',
        'editPostContent'
      ]),
      titleInputHander (value) {
        this.editPostTitle({postId: this.post.objectId, title: value});
      },
      tagsInputHandler (value) {
        this.editPostTags({postId: this.post.objectId, tags: value});
      },
      contentInputHandler (value) {
        this.editPostContent({postId: this.post.objectId, content: value});
      }
    }
  };
</script>
