module.exports = function (app) {

  //Automigrate for models, everytime the app will run, db will be replaced with this data

  app.dataSources.motorcycleDataSource.automigrate('motorcycle', function (err) {

    if (err) {
      throw err;
    }

    app.models.Motorcycle.create([
      {
        "make": " Harley Davidson",
        "image": "images/heritage.jpg",
        "model": "Heritage Softail",
        "description": "An Evolution V-twin Engine!",
        "category": "Cruiser",
        "year": "1986",
        "id": "57337088fabe969f2dd4078e"
      }
    ], function (err, motorcycles) {
      if (err) throw err;
      console.log('Created Motrocycle Model: \n', motorcycles);
    });
  });


  app.dataSources.motorcycleDataSource.automigrate('review', function (err) {

    if (err) throw err;

    app.models.Review.create(
      [
        {
          "name": "Jax Tell",
          "email": "jax@soa.com",
          "id": "57337b82e630a9152ed6554d",
          "review": "I love the engine and sound",
          "ObjectId": "57337088fabe969f2dd4078e"
        },
        {
          "name": "Filip Chibs",
          "email": "chibs@soa.com",
          "id": "57337b122e630a9152ed6554d",
          "review": "Great ride",
          "ObjectId": "57337088fabe969eqdd4078e"
        },
        {
          "name": "kvin vin",
          "email": "kvin@soa.com",
          "id": "57337b82e630a9122ed6554d",
          "review": "great value for price",
          "ObjectId": "57337088fabe969212d4078e"
        }
      ], function (err, reviews) {
        if (err) throw err;
        console.log('Created Review Model: \n', reviews);
      });

  });


};
