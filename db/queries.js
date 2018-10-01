const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('profile');
  },
  getOne(id) {
    return knex('profile').where('id', id).first();
  }
}