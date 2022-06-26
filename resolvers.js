const { argsToArgsConfig } = require("graphql/type/definition");
const { StudentData, BooksData, AuthorData } = require("./data");


module.exports = {
  Query: {
    allUsers: (parent, {}, _, info ) => {
        
      return StudentData;
    },
    user: (_, args ) => {
       return StudentData.find(student => student.studentId == args.studentId)
    }
 
  },

  Mutation: {
    saveUser: (parent, { studentId, name, sex, collection }) => {
      const newuser = {
        studentId,
        name,
        sex,
        collection
      };
    
      StudentData.push(newuser);
      return {
        code: "200",
        success: true,
        message: "New user record saved",
        user: newuser
      }
    },
  },

  Book: {
    authors: (book) => {
      const authors = AuthorData.filter((author) => {
        return author.books.includes(book.bookId);
      });
      return authors;
    },
  },


  User: {
    booksCollection: (parent) => {
        const student = StudentData.find(s => s.studentId == parent.studentId);
        const booksArray = student?.booksCollection;
        const collection = [];
        booksArray?.map((bookId) => {
            const book = BooksData.find(e => e.bookId == bookId);
            collection.push(book);
        });
        return collection;
    }
  }
};

/*query{
  allUsers {
    sex
    studentId
    name
    booksCollection {
      authors {
        address
        authorId
        name
      }
      title

      
    }
  }
}
*/

/*

mutation($studentId: ID!, $name: String!, $sex: String!, $collection: [String]){
  saveUser(studentId: $studentId, name: $name, sex: $sex, collection: $collection) {
    code
    message
    success
    user {
      name
      studentId
      booksCollection {
        authors {
          address
        }
      }
    }
  }
}


*/
