// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on our friends.
// ===============================================================================

let friends = require("../data/friends");


module.exports = function(app) {
    // get request which returns a json of our current friends array at the api/friends route.
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    //post request that takes data submitted on front end, computes and returns match.
    app.post("/api/friends", function(req, res) {
 
        let newFriend = req.body; //this is all of the user's data
        let newFriendScores = req.body.scores; //convert user's scores into an array. 
        let totalDifference = 0; //initialize number var for difference between user scores and rest of friend scores

        let friendMatch = { //create an object for the match so we can send it back to the AJAX request.  
          name: "",
          photo: "",
          differenceAmt: 55 //amount that is greater than max difference between any scores
        }

        for (var i = 0; i < friends.length; i++) { // looping through all friends objects
          for (var j = 0; j < friends[i].scores[j]; j++) { //another loop to go through friends' scores array
          //compares user score array to all other friend scores to calculate absolute difference (Math.abs).
            totalDifference +=  Math.abs(parseInt(friends[i].scores[j] - parseInt(newFriendScores[j]))); 
            
            if (totalDifference <= friendMatch.differenceAmt) { //if the total difference is less or equal to the previous friendMatch then replace it with the new match
              friendMatch.name = friends[i].name;
              friendMatch.photo = friends[i].photo;
              friendMatch.differenceAmt = totalDifference;
            }
          } 
        }
        //push the new friend into our friends object and then send it back to the front end to use with Ajax request.
        friends.push(newFriend)
        res.json(friendMatch);
    
      }
    );
  
}
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
