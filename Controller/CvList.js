var express = require('express');
var router = express.Router();
var accountModel 	= require.main.require('./models/AdminModel/account');

router.get('/', function(req, res){
	var msg =req.query.msg;
	accountModel.getInformation(function(result){
		res.render('cvlist',{
			data:result,
			msg:msg
		});
	});
});

router.get('/details', function(req, res){
	var id =req.query.id;
	accountModel.getInformationById(id,function(result){
		//console.log(result);
		res.render('cvDetails',{
			data:result
		});
	});
});

router.get('/update', function(req, res){
	var id =req.query.id;
	accountModel.getInformationById(id,function(result1){
		// console.log(result1);
		accountModel.getDistricts(function(result2){
			//console.log(result);
			res.render('cvUpdate',{
				data:result1,
				data2:result2
			});
		});
	});
});

router.post('/update', function(req, res){
	var data=[];
      data.push(req.body.name);
      data.push(req.body.fname);
      data.push(req.body.dob);
      data.push(getAge(req.body.dob));
      data.push(req.body.gender);
      data.push(req.body.phone);
      data.push(req.body.email);
      data.push(req.body.address);
      data.push(req.body.district);
      data.push(req.body.institute);
      data.push(req.body.subject);
      data.push(req.body.pyear);
			data.push(req.query.id);
       console.log(data);
      accountModel.updateCV(data,function(status){
        if(status){
          res.redirect('/cvlist?msg=Successfully Updated');
        }
        else{
          res.redirect('/');
        }
	});
});

router.get('/delete', function(req, res){
	var id =req.query.id;
	accountModel.deleteCV(id,function(result){
		res.redirect('/cvlist?msg=Successfully Deleted');
	});
});

function getAge(dateString) {
		// console.log(dateString);
    var today = new Date();
    var birthDate = new Date(dateString);
		// console.log(birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
module.exports = router;
