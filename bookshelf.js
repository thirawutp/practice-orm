const knex = require('knex');
const bookshelf = require('bookshelf');
const knexConfig = require('./knexfile');

const _bookshelf = bookshelf(knex(knexConfig.development))

const User = _bookshelf.Model.extend({
  tableName: 'users'
})

module.exports =  User
