const { gql } =  require("apollo-server-express")



module.exports = gql`
 type Query {
    allUsers:[User]
    user(studentId: String):User
 }


 type Mutation {
    saveUser(studentId: ID!, name: String!, sex: String!, collection: [String]): UserDataSaved
 }

 interface MutationResponse  {
    code: String!
    success: Boolean!
    message: String!
 }

 type UserDataSaved implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
 }

 type User {
    studentId: ID!
    name: String!
    sex: String!
    booksCollection: [Book]
 }

 type Book {
    bookId: ID!
    title: String!
    authors: [Author] 
 }

 type Author {
    authorId: ID!
    name: String
    sex: String
    address: String
 }






`