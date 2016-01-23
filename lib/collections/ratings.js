Ratings = new Mongo.Collection('ratings');

Meteor.methods({

    'enterRating': function (rating, feedback) {

      if(Ratings.find().count() < 200) {

        feedback = feedback ? feedback : '';

        Ratings.insert({ rating : rating, description : feedback });
      }
    }
});
