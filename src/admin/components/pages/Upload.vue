<template>
  <div id="uploaderFilesContainer">
    <input type="button" id="pickFiles" value="upload">
    <a class="btn-flat">Flat button</a>
    <a class="btn-raised">Raised A button</a>
    <button class="btn-raised">Button Raised</button>
    <div class="dialog active">
      <div class="dialog-header">
        <h4>this is h4</h4>
      </div>
      <div class="dialog-body">
        <p>Use a modal for dialog boxes, confirmation messages, or other content that can be called up. In order for the modal to work you have to add the Modal ID to the link of the trigger. To add a close button, just add the class .modal-close to your button</p>
      </div>
      <div class="dialog-footer">
        <a class="btn-flat dialog-action">Agree</a>
        <a class="btn-flat dialog-action">Cancel</a>
      </div>
    </div>
  </div>
</template>

<script>
  function createUploader () {
    let uploader = Qiniu.uploader({
      runtimes: 'html5, flash, html4',
      browse_button: 'pickFiles',
      uptoken_url: '/upload/token',
      get_new_uptoken: false,
      domain: 'http://ofkyhrvda.bkt.clouddn.com/',
      container: 'uploaderFilesContainer',
      max_file_size: '20mb',
      max_retries: 3,
      dragDrop: false,
      chunk_size: '4mb',
      auto_start: true,
      init: {
        'FilesAdded': function (up, files) {
          plupload.each(files, function (file) {
            // 文件添加进队列后，处理相关的事情
            console.log('FilesAdded', file)
          })
        },
        'BeforeUpload': function (up, file) {
          // 每个文件上传前，处理相关的事情
          console.log('BeforeUpload')
        },
        'UploadProgress': function (up, file) {
          // 每个文件上传时，处理相关的事情
          var chunk_size = plupload.parseSize(this.getOption('chunk_size'))
          console.log('uploading...', file.percent + '%', file.speed, chunk_size)
        },
        'FileUploaded': function (up, file, info) {
          // 每个文件上传成功后，处理相关的事情
          // 其中info是文件上传成功后，服务端返回的json，形式如：
          // {
          //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
          //    "key": "gogopher.jpg"
          //  }
          // 查看简单反馈
          var domain = up.getOption('domain')
          var res = JSON.parse(info)
          console.log(domain, res)
          var sourceLink = domain + res.key
        },
        'Error': function (up, err, errTip) {
          //上传出错时，处理相关的事情
          console.log('Error', err)
        },
        'UploadComplete': function() {
          //队列文件处理完毕后，处理相关的事情
          console.log('UploadComplete')
        },
        'Key': function (up, file) {
          // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
          // 该配置必须要在unique_names: false，save_key: false时才生效
          console.log(file)
          var type = file.type.split('/')[0]
          var ext = file.type.split('/')[1]
          var key = `post/${type}/${file.id}.${ext}`;
          return key
        }
      }
    })
  }
  export default {
    mounted () {
      createUploader()
      console.log('uploader created')
    }
  }
</script>
