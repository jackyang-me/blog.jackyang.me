var path = require('path');

module.exports = {
  port: 4141,
  staticPath: [
    path.resolve(__dirname, '../../../dist')
  ],
  AV: {
    appId: '849H3n1s7MtILQhdMEYOvOD6-gzGzoHsz',
    appKey: 'g0v4ClWyQtyu8EMQLxQ40xWQ'
  }
};
