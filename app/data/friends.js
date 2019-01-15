// ===============================================================================
// DATA
// Below data will hold all friends.
// But you could have it be an empty array as well.
// ===============================================================================

let friends = [
    {
      name: "Jason",
      photo: "jason@example.com",
      scores: ["1", "2", "1", "4", "1", "4", "1", "3", "1", "5", ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  