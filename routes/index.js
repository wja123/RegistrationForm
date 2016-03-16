var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.post('/', function(req, res, next) {
  fs.read(path.join(__dirname,"../db.json"),(err,data)=>{
    if(err) return err;
    var dat = JSON.parse(data);
    dat.push(req.body);
    fs.write(path.join(__dirname,"../db.json"),JSON.stringify(dat),(err))
  });
});

module.exports = router;
