const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
 }


`;

module.exports = typeDefs;