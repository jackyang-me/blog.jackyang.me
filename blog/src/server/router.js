var Router = require('koa-router');
var router = Router();

router.get('/user', function *(next) {
  this.body = {a: 'b'};
});

module.exports = router;
