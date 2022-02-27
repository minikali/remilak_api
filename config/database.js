module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'db_remilak'),
      user: env('DATABASE_USERNAME', 'remilak'),
      password: env('DATABASE_PASSWORD', 'remilak@Farfar31'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
