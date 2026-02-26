export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongoUser: process.env.MONGO_USER,
  mongoPass: process.env.MONGO_PASS,
  mongodb: process.env.MONGO_DB,
  meUser: process.env.ME_USER,
  mePassword: process.env.ME_PASS,
  defaultLimit: +(process.env.DEFAULT_LIMIT ?? '7'),
});
