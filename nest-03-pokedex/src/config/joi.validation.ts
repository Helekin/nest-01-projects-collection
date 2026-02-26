import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGO_USER: Joi.required(),
  MONGO_PASS: Joi.required(),
  MONGO_DB: Joi.required(),
  ME_USER: Joi.required(),
  ME_PASS: Joi.required(),
  DEFAULT_LIMIT: Joi.number().default(5),
});
