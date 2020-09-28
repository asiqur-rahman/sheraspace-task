var db = require.main.require('./models/database/database');

module.exports ={

	getInformation: function(callback){
		var sql = "select * from cv";
		// console.log(sql);
		db.getResults(sql, function(result){
			if(result.length > 0){
				// console.log(result.length);
				callback(result);
			}
		});
	},

	getInfoByDistrict: function(callback){
		var sql = "SELECT COUNT(id) as total, district FROM cv GROUP BY district";
		// console.log(sql);
		db.getResults(sql, function(result){
			if(result.length > 0){
				// console.log(result.length);
				callback(result);
			}
		});
	},

	getInfoByAge: function(callback){
		var sql = "SELECT count(CASE WHEN (age <= 19 and gender='male') THEN id ELSE null END) AS 'barlm', count(CASE WHEN (age >= 20 AND age <= 25 and gender='male') THEN id ELSE null END) AS 'bar1m', count(CASE WHEN (age >= 26 AND age <= 30 and gender='male') THEN id ELSE null END) AS 'bar2m', count(CASE WHEN (age >= 31 AND age <= 35 and gender='male') THEN id ELSE null END) AS 'bar3m', count(CASE WHEN (age >= 36 AND age <= 40 and gender='male') THEN id ELSE null END) AS 'bar4m', count(CASE WHEN (age >= 41 AND age <= 45 and gender='male') THEN id ELSE null END) AS 'bar5m', count(CASE WHEN (age >= 46 and gender='male') THEN id ELSE null END) AS 'barhm',count(CASE WHEN (age <= 19 and gender='female') THEN id ELSE null END) AS 'barlf', count(CASE WHEN (age >= 20 AND age <= 25 and gender='female') THEN id ELSE null END) AS 'bar1f', count(CASE WHEN (age >= 26 AND age <= 30 and gender='female') THEN id ELSE null END) AS 'bar2f', count(CASE WHEN (age >= 31 AND age <= 35 and gender='female') THEN id ELSE null END) AS 'bar3f', count(CASE WHEN (age >= 36 AND age <= 40 and gender='female') THEN id ELSE null END) AS 'bar4f', count(CASE WHEN (age >= 41 AND age <= 45 and gender='female') THEN id ELSE null END) AS 'bar5f', count(CASE WHEN (age >= 46 and gender='female') THEN id ELSE null END) AS 'barhf' FROM cv"// console.log(sql);
		db.getResults(sql, function(result){
			if(result.length > 0){
				// console.log(result.length);
				callback(result);
			}
		});
	},

	getDistricts: function(callback){
		var sql = "select * from districts";
		// console.log(sql);
		db.getResults(sql, function(result){
			if(result.length > 0){
				// console.log(result.length);
				callback(result);
			}
		});
	},

	insertCV: function(data, callback){
		// for (var i = 0; i < data.length; i++) {
		// 	console.log(i+" : "+data[i]);
		// }
		console.log(data);
		var sql = "INSERT INTO `cv` VALUES (NULL, '"+data[0]+"', '"+data[1]+"', '"+data[2]+"', '"+data[3]+"','"+data[4]+"', '"+data[5]+"', '"+data[6]+"', '"+data[7]+"','"+data[8]+"', '"+data[9]+"', '"+data[10]+"', '"+data[11]+"')";
    db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	getInformationById: function(id, callback){
		// console.log(data);
		var sql = "select * from cv where id="+id;
		db.getResults(sql, function(result){
			if(result.length > 0){
				// console.log(result.length);
				callback(result[0]);
			}
		});
	},

	deleteCV: function(id, callback){
		var sql = "DELETE FROM cv WHERE id = "+id;
    db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	updateCV: function(data, callback){
		var sql = "UPDATE `cv` SET name = '"+data[0]+"',fname = '"+data[1]+"',dob = '"+data[2]+"',age = '"+data[3]+"',gender = '"+data[4]+"',phone = '"+data[5]+"',email = '"+data[6]+"',address = '"+data[7]+"',district = '"+data[8]+"',institute = '"+data[9]+"',subject = '"+data[10]+"',pyear = '"+data[11]+"' WHERE `cv`.`id` = "+data[12];
    db.execute(sql, function(status){
				callback(true);
		});
	}
}
