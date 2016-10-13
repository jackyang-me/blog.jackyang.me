var Router = require('koa-router');
var router = Router();

router.get('/user', function *(next) {
  this.body = 'give you your user';
});

module.exports = router;
