const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum
