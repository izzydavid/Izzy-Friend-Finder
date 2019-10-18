var friendData = require('../data/friends');

module.exports = function (app) {
  app.get('/api/friends', function (req, res, next) {
    res.json(friendData)
  })
  app.post('/api/friends', function (req, res, next) {
    console.log(req.body)
    res.json(friendData)
      // console.log(friends)
  //store request body in variable
  const userInput = req.body;
  //store the user scores in a variable
  const userScores = userInput.scores

  //declare match variables
  let matchName = "";
  let matchImage = "";
  //total for friend finder logic
  let total = 1000;

  //loop through all friends
  for (i = 0; i < friends.length; i++) {

    let difference = 0;
    //find the difference for each question between user and potential friend
    for (j = 0; j < userScores.length; j++) {
      //and store it in difference
      difference += Math.abs(friends[i].scores[j] - userScores[j])
    }
    //if difference is lower than current difference, make that friend the new match
    if (difference < total) {
      total = difference
      matchName = friends[i].name;
      matchImage = friends[i].photo;
    }
  }

  //push user to friends array
  friends.push(userInput);
  //send match info 
  res.json({
    matchName,
    matchImage
  })
  })
  
};

