var router = require("express").Router();
var mongoose = require("mongoose");
var Item = mongoose.model("Item");
var User = mongoose.model('User');

router.get('/title', function(req, res, next) {
  let title = '';
  if (typeof req.title !== 'undefined') {
    title = req.title;
  }

  Promise.resolve(title)
    .then(function(item) {
      return res.json({
        projectList: req.item
      });
    })
    .catch(next)
});

module.exports = router;
