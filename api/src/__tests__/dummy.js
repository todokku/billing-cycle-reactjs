const { Credit, Debit, User } = require('../database/models');

const USER = new User({
  id: 3,
  name: 'Gabriel Hahn Schaeffer',
  email: 'gabriel_hahn@hotmail.com',
  password: '123456',
  password_hash: 'some_hash',
});

const CREDIT = new Credit({
  id: 5,
  user_id: 1,
  description: 'Hamburguer John',
  date: '2020-03-20T08:10:09.000Z',
  value: 19.9,
  createdAt: '2020-03-20T13:38:53.511Z',
  updatedAt: '2020-03-20T13:38:53.511Z',
});

const CREDIT_ARRAY = [
  new Credit({
    id: 5,
    user_id: 1,
    description: 'Hamburguer John',
    date: '2020-03-20T08:10:09.000Z',
    value: 19.9,
    createdAt: '2020-03-20T13:38:53.511Z',
    updatedAt: '2020-03-20T13:38:53.511Z',
  }),
  new Credit({
    id: 2,
    user_id: 2,
    description: 'Academia',
    date: '2020-03-22T10:15:09.000Z',
    value: 85.00,
    createdAt: '2020-03-20T13:38:53.511Z',
    updatedAt: '2020-03-20T13:38:53.511Z',
  }),
];

const DEBIT = new Debit({
  id: 5,
  user_id: 1,
  description: 'Hamburguer John',
  date: '2020-03-20T08:10:09.000Z',
  value: 19.9,
  createdAt: '2020-03-20T13:38:53.511Z',
  updatedAt: '2020-03-20T13:38:53.511Z',
});

const DEBIT_ARRAY = [
  new Debit({
    id: 5,
    user_id: 1,
    description: 'Hamburguer John',
    date: '2020-03-20T08:10:09.000Z',
    value: 19.9,
    createdAt: '2020-03-20T13:38:53.511Z',
    updatedAt: '2020-03-20T13:38:53.511Z',
  }),
  new Debit({
    id: 2,
    user_id: 2,
    description: 'Academia',
    date: '2020-03-22T10:15:09.000Z',
    value: 85.00,
    createdAt: '2020-03-20T13:38:53.511Z',
    updatedAt: '2020-03-20T13:38:53.511Z',
  }),
];

module.exports = {
  USER,
  CREDIT,
  CREDIT_ARRAY,
  DEBIT,
  DEBIT_ARRAY,
};
