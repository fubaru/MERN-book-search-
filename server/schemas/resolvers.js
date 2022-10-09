const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
//Read CRUD
    Query: {
        users
    },
//Post, Put, and Delete CRUD
    Mutation: {

    }
};

module.exports = resolvers;