var express = require('express');
var router = express.Router();
var accountModel 	= require.main.require('./models/AdminModel/account');

router.get('/', function(req, res){
  var count=[];
  var countName=[];

  var man=[];
  var woman=[];
	accountModel.getInfoByDistrict(function(result1){
    for(var i=0; i<result1.length; i++){
      count.push([result1[i].total]);
      countName.push(result1[i].district);
    }
    accountModel.getInfoByAge(function(result2){
        man.push([result2[0].barlm]);
        man.push([result2[0].bar1m]);
        man.push([result2[0].bar2m]);
        man.push([result2[0].bar3m]);
        man.push([result2[0].bar4m]);
        man.push([result2[0].bar5m]);
        man.push([result2[0].barhm]);

        woman.push([result2[0].barlf]);
        woman.push([result2[0].bar1f]);
        woman.push([result2[0].bar2f]);
        woman.push([result2[0].bar3f]);
        woman.push([result2[0].bar4f]);
        woman.push([result2[0].bar5f]);
        woman.push([result2[0].barhf]);

    // console.log(count);
		//  console.log(countName);
		res.render('dashboard',{
			total:count,
      dist:countName,
      male:man,
      female:woman
      });
		});
	});
});

module.exports = router;
