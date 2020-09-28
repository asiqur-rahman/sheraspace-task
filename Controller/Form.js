var express=require('express');
var router=express.Router();
var accountModel 	= require.main.require('./models/AdminModel/account');

router.get('/',function(req,res){
  accountModel.getDistricts(function(result){
		res.render('form',{
			data:result
		});
	});
});

router.post('/',function(req,res){
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
      // console.log(data);
      accountModel.insertCV(data,function(status){
        if(status){
          res.redirect('/cvlist?msg=Successfully New CV Created');
        }
        else{
          res.redirect('/');
        }
  });
});
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
module.exports=router;
