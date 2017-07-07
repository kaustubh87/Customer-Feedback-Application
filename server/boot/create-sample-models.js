module.exports = function(app){

//Automigrate for models, everytime the app will run, db will be replaced with this data

app.dataSources.motorcycleDataSource.automigrate('motorcycle', function(err){

    if(err){
       throw err;
    }

    app.models.Motorcycle.create([
      {
        "make" : " Harley Davidson",
        "image": "images/heitage.jpg",
        "model" : "Heritage Softail",
        "description": "An Evolution V-twin Engine!",
        "category": "Cruiser",
        "year" : "1986",
        "id" : "57337088fabe969f2dd4078e"
      }
    ], function(err, motorcycles){
      if(err) throw err;
      console.log('Created Motrocycle Model: \n', motorcycles );

    });


});



}
