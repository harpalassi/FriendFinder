// ===============================================================================
// DATA
// Below data will hold all friends.
// But you could have it be an empty array as well.
// ===============================================================================

let friends = [
    {
      name: "Jason",
      photo: "https://www.incimages.com/uploaded_files/image/970x450/getty_504134147_174741.jpg",
      scores: ["1", "2", "1", "4", "1", "4", "1", "3", " 1", "5" ]
    },
    {
      name: "Freddy",
      photo: "https://www.incimages.com/uploaded_files/image/970x450/getty_504134147_174741.jpg",
      scores: ["1", "3", "4", "1", "5", "2", "1", "2", "1", "1" ]
    },
    {
      name: "Billy",
      photo: "https://www.incimages.com/uploaded_files/image/970x450/getty_504134147_174741.jpg",
      scores: ["2", "5", "1", "4", "1", "4", "1", "3", "1", "1" ]
    },

  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  