module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f28f7956e2e1e38805d1b4b7e48ff16f'),
  },
});
