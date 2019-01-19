// ===============================================================================
// DATA
// Below data will hold all friends.
// But you could have it be an empty array as well.
// ===============================================================================

let friends = [
    {
      name: "Jason",
      photo: "https://vignette.wikia.nocookie.net/fridaythe13th/images/6/6b/Lrqb666.png/revision/latest?cb=20120603031421",
      scores: ["2", "2", "1", "4", "1", "4", "1", "3", "1", "5" ]
     },
    {
      name: "Freddy",
      photo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Freddy_Krueger_%28Robert_Englund%29.jpg/220px-Freddy_Krueger_%28Robert_Englund%29.jpg",
      scores: ["1", "3", "4", "1", "5", "2", "1", "2", "1", "1" ]
    },
    {
      name: "Scream",
      photo: "https://images-na.ssl-images-amazon.com/images/I/61rhiLoVNQL._AC_UL320_SR300,320_.jpg",
      scores: ["2", "5", "1", "4", "1", "4", "1", "3", "1", "1" ]
    },

  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  