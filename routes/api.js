var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

router.get('/pirates', function(req, res, next) {
  knex('pirates')
  .then(function(data){
    res.json(data);
  })

});

module.exports = router;
