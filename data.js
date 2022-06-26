const StudentData = [
  {
    studentId: "1",
    name: "John Parson",
    sex: "Male",
    booksCollection: ["1", "2"]
  },
  {
    studentId: "2",
    name: "Pokemon Geshia",
    sex: "Female",
    booksCollection: ["1"]
  },
  {
    studentId: "3",
    name: "Samson Loken",
    sex: "Male",
    booksCollection: []
  },
];

const BooksData = [
  {
    bookId: "1",
    title: "The Law Of The Land",
    authors: [
      { authorId: "1", authorName: "John Mason" },
      { authorId: "2", authorName: "Favour Damen" },
    ],
  },

  {
    bookId: "2",
    title: "The Next day is Close",
    authors: [{ authorId: "1", authorName: "John Mason" }],
  },
];

const AuthorData = [
  {
    authorId: "1",
    name: "John Mason",
    sex: "Male",
    address: "East West Lane",
    books: ["1", "2"]
    
  },

  {
    authorId: "2",
    name: "Favour Damen",
    sex: "Female",
    address: "Best Avenue Drive Zone",
    books: ["1"]
  },
];


module.exports = { StudentData, AuthorData, BooksData}
